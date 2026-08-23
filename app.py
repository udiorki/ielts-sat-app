"""
IELTS Reading content service — генерация + кэш + API в одном файле.

Запуск: uvicorn app:app --host 0.0.0.0 --port 8000
Нужна переменная окружения: ANTHROPIC_API_KEY

Фронтенд (index.html) дергает:
  GET /api/reading/{book}/{test}/{passage}
и получает JSON { title, text, questions[] } — из кэша либо свежесгенерированный.
"""
import json
import os
import sqlite3
from pathlib import Path

from anthropic import Anthropic
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

# ============================================================
# КЭШ (SQLite) — каждая комбинация book/test/passage генерируется один раз
# ============================================================

DB_PATH = Path(__file__).parent / "content_cache.db"


def init_db():
    conn = sqlite3.connect(DB_PATH)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS reading_passages (
            book INTEGER NOT NULL,
            test INTEGER NOT NULL,
            passage INTEGER NOT NULL,
            content_json TEXT NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (book, test, passage)
        )
    """)
    conn.commit()
    conn.close()


def get_cached(book: int, test: int, passage: int):
    conn = sqlite3.connect(DB_PATH)
    row = conn.execute(
        "SELECT content_json FROM reading_passages WHERE book=? AND test=? AND passage=?",
        (book, test, passage),
    ).fetchone()
    conn.close()
    return row[0] if row else None


def save_to_cache(book: int, test: int, passage: int, content_json: str):
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        """INSERT OR REPLACE INTO reading_passages
           (book, test, passage, content_json) VALUES (?, ?, ?, ?)""",
        (book, test, passage, content_json),
    )
    conn.commit()
    conn.close()


# ============================================================
# ГЕНЕРАЦИЯ — оригинальный контент через Claude API
# ============================================================

client = Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
MODEL = "claude-sonnet-5"  # можно заменить на claude-haiku-4-5-20251001 для скорости/дешевизны

SYSTEM_PROMPT = """You generate ORIGINAL IELTS Academic Reading practice material.
The text and questions must be entirely your own writing — never reproduce or
closely paraphrase real Cambridge IELTS book content. Match Cambridge's format,
tone, and difficulty, but the topic, facts, and wording must be new.

Output STRICT JSON only. No markdown fences, no commentary, no text outside the JSON object.

Schema:
{
  "title": string,
  "text": string,               // 700-900 words, 4-6 paragraphs, academic register
  "questions": [
    {"number": 1, "type": "gap_fill", "prompt": "... ___ ...", "answer": "one word from the passage"},
    ... (numbers 1-7, gap_fill)
    {"number": 8, "type": "true_false_not_given", "statement": "...", "answer": "TRUE"},
    ... (numbers 8-13, true_false_not_given)
  ]
}

Rules:
- Every answer must be verifiable strictly from the passage text (no outside knowledge needed).
- gap_fill prompts use "___" to mark the blank; answer is ONE WORD ONLY, taken verbatim from the passage.
- true_false_not_given statements must have an unambiguous answer given the text.
- Do not reuse names, topics, or facts across different (book, test, passage) combinations you generate.
"""

DIFFICULTY_BY_PASSAGE = {
    1: "gentler, descriptive, narrative or historical topic",
    2: "moderate difficulty, workplace/education/social-issue context",
    3: "most difficult: abstract, academic, argumentative or scientific topic",
}


def generate_passage(book: int, test: int, passage_num: int) -> dict:
    difficulty_note = DIFFICULTY_BY_PASSAGE[passage_num]

    user_prompt = f"""Generate IELTS Academic Reading Passage {passage_num} of 3.
Difficulty profile: {difficulty_note}.
This is for Book {book}, Test {test} of a practice series — choose a topic area
distinct from what a generic/common IELTS passage would use, to keep variety
across a large series of practice tests.
Return only the JSON object per the schema."""

    response = client.messages.create(
        model=MODEL,
        max_tokens=3000,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": user_prompt}],
    )

    raw = response.content[0].text.strip()
    if raw.startswith("```"):
        raw = raw.strip("`")
        if raw.startswith("json"):
            raw = raw[4:]

    return json.loads(raw)


# ============================================================
# API
# ============================================================

app = FastAPI(title="IELTS Reading Content Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # в проде замени на домен своего Mini App
    allow_methods=["GET"],
)

init_db()


@app.get("/api/reading/{book}/{test}/{passage}")
def get_reading(book: int, test: int, passage: int):
    if not (1 <= book <= 21 and 1 <= test <= 4 and 1 <= passage <= 3):
        raise HTTPException(400, "book: 1-21, test: 1-4, passage: 1-3")

    cached = get_cached(book, test, passage)
    if cached:
        return json.loads(cached)

    content = generate_passage(book, test, passage)
    save_to_cache(book, test, passage, json.dumps(content, ensure_ascii=False))
    return content
