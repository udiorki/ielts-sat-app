"""
Минимальная обвязка: бот показывает кнопку, открывающую твой Mini App (index.html),
который уже сам обращается к /api/reading/... за контентом.
"""
import asyncio
import os

from aiogram import Bot, Dispatcher
from aiogram.filters import CommandStart
from aiogram.types import Message, WebAppInfo
from aiogram.utils.keyboard import InlineKeyboardBuilder

BOT_TOKEN = os.environ["BOT_TOKEN"]
WEBAPP_URL = os.environ["WEBAPP_URL"]  # https://yourdomain.com/index.html

bot = Bot(BOT_TOKEN)
dp = Dispatcher()


@dp.message(CommandStart())
async def start(message: Message):
    kb = InlineKeyboardBuilder()
    kb.button(text="Открыть симулятор", web_app=WebAppInfo(url=WEBAPP_URL))
    await message.answer("Готова к практике IELTS/SAT?", reply_markup=kb.as_markup())


async def main():
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
