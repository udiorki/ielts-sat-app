window.CAMBRIDGE_DATA = window.CAMBRIDGE_DATA || {};

// База данных для всех 21 книг
const topicsPool = [
  ["The Secrets of Ancient Maya Engineering", "Archaeological excavations reveal complex hydraulic networks, underground reservoirs, and astronomical alignments in pre-Columbian cities."],
  ["Ocean Thermal Energy and Deep Sea Resources", "Exploring renewable baseload power generation using ocean temperature gradients and closed-cycle ammonia turbines."],
  ["Urban Heat Islands and Biophilic Architecture", "Mitigating rising urban surface temperatures using reflective cool roofs, green corridors, and shaded pedestrian boulevards."],
  ["The Cognitive Mechanisms of Decision Making", "How neural heuristics, cognitive fatigue, and emotional framing shape financial and economic choices in modern humans."],
  ["Drought-Resilient Crops in Modern Agriculture", "Revitalizing heritage grains such as teff, pearl millet, and quinoa to combat global aridification and soil degradation."],
  ["Bioluminescence in Marine Extremophiles", "Luciferase enzymatic pathways, deep-sea camouflage, and signaling mechanisms among abyssal benthic fauna."],
  ["The Chronometer and Maritime Navigation", "John Harrison's mechanical clock inventions and the historic solution to calculating longitude at open sea."],
  ["Advanced Grid-Scale Energy Storage", "Comparative analysis of solid-state lithium systems, compressed air storage, and redox flow battery technologies."],
  ["Linguistic Diversity and Dialect Preservation", "Documenting unwritten indigenous languages and analyzing phonetic shifts across isolated geographic communities."],
  ["Supervolcano Eruptions and Paleoclimate", "Assessing volcanic winter hypotheses, sulfur aerosol dispersion, and quaternary extinction events from ice core samples."],
  ["Echolocation in Marine Cetaceans", "The bioacoustics of odontocetes: ultrasonic melon focusing, echonavigation, and resistance to ambient aquatic noise."],
  ["Roman Aqueducts and Hydraulic Mortar", "Engineering surveying, pozzolanic volcanic ash mortar, and inverted siphons across Roman provincial infrastructure."]
];

// Авто-наполнение для книг 1–18, 19, 20
for (let b = 1; b <= 21; b++) {
  const bStr = String(b);
  window.CAMBRIDGE_DATA[bStr] = window.CAMBRIDGE_DATA[bStr] || {};
  for (let t = 1; t <= 4; t++) {
    const tStr = String(t);
    const top1 = topicsPool[((b - 1) * 3) % topicsPool.length];
    const top2 = topicsPool[((b - 1) * 3 + 1) % topicsPool.length];
    const top3 = topicsPool[((b - 1) * 3 + 2) % topicsPool.length];

    window.CAMBRIDGE_DATA[bStr][tStr] = {
      bookId: bStr,
      testId: tStr,
      passages: [
        {
          id: 1,
          title: top1[0],
          passage_text: "A " + top1[0] + " represents one of the most compelling subjects of contemporary academic inquiry. " + top1 + "\n\nB Early research focused on how environmental variables and resource constraints influenced community development. Archaeological expeditions and historical records demonstrate that innovative adaptations occurred across multiple distinct zones. Fieldwork notes indicate that technical knowledge was systematically transmitted across successive generations.\n\nC Comparative investigations by international researchers suggest that structural shifts in resource allocation directly stimulated technical specialization. Furthermore, trading routes facilitated the rapid diffusion of these methods across neighboring regions.\n\nD Modern analytical methods, including high-resolution imaging and isotopic spectrometry, have provided unprecedented accuracy in dating artifacts. Consequently, long-standing academic theories regarding chronological timelines have been thoroughly revised.",
          questions: [
            { id: "inst-p1-1", type: "instruction", prompt: "Questions 1-7<br>Complete the notes below.<br>Choose <b>ONE WORD ONLY</b> from the passage." },
            { id: 1, type: "fill_in", prompt: "Early research focused on environmental variables and resource _____.", answer: "constraints" },
            { id: 2, type: "fill_in", prompt: "Records demonstrate that innovative _____ occurred across distinct zones.", answer: "adaptations" },
            { id: 3, type: "fill_in", prompt: "Technical knowledge was transmitted across successive _____.", answer: "generations" },
            { id: 4, type: "fill_in", prompt: "Structural shifts in resource _____ stimulated technical specialization.", answer: "allocation" },
            { id: 5, type: "fill_in", prompt: "Trading routes facilitated the rapid _____ of methods.", answer: "diffusion" },
            { id: 6, type: "fill_in", prompt: "Modern methods include high-resolution _____.", answer: "imaging" },
            { id: 7, type: "fill_in", prompt: "Academic theories regarding chronological timelines have been _____.", answer: "revised" },
            { id: "inst-p1-2", type: "instruction", prompt: "Questions 8-13<br>Do the statements agree with the passage?<br><b>TRUE</b> / <b>FALSE</b> / <b>NOT GIVEN</b>" },
            { id: 8, type: "tfng", prompt: "Early community adaptations took place without any influence from natural surroundings.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: 9, type: "tfng", prompt: "All ancient technical knowledge was strictly kept secret from neighboring tribes.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: 10, type: "tfng", prompt: "Trading routes played an active role in spreading specialized techniques.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: 11, type: "tfng", prompt: "Isotopic spectrometry has increased the precision of artifact dating.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: 12, type: "tfng", prompt: "High-resolution imaging devices are manufactured exclusively in Europe.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: 13, type: "tfng", prompt: "Traditional chronological timelines have remained unchanged despite new evidence.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" }
          ]
        },
        {
          id: 2,
          title: top2[0],
          passage_text: "A " + top2[0] + " has emerged as a crucial area of focus for scientists and urban planners worldwide. " + top2 + "\n\nB Quantitative studies indicate that deploying these interventions produces substantial systemic advantages. Documented findings reveal measurable improvements in efficiency, environmental stability, and resilience against sudden external shocks.\n\nC Nevertheless, logistical bottlenecks and high initial capital costs present formidable challenges in resource-limited contexts. Public-private partnerships are currently testing subsidy models to lower barrier-to-entry costs.\n\nD Recent trials demonstrate that decentralized networks offer superior operational flexibility compared to legacy centralized systems. Incorporating community-driven feedback loops ensures sustained long-term efficacy.",
          questions: [
            { id: "inst-p2-1", type: "instruction", prompt: "Questions 14-19<br>Which paragraph (A-D) contains the following information?" },
            { id: 14, type: "fill_in", prompt: "Mention of financial hurdles and initial capital costs (A-D):", answer: "C" },
            { id: 15, type: "fill_in", prompt: "Documented improvements in environmental stability and efficiency (A-D):", answer: "B" },
            { id: 16, type: "fill_in", prompt: "The superior flexibility of decentralized systems (A-D):", answer: "D" },
            { id: 17, type: "fill_in", prompt: "An introduction to the significance of the research topic (A-D):", answer: "A" },
            { id: 18, type: "fill_in", prompt: "The role of public-private partnerships in subsidy models (A-D):", answer: "C" },
            { id: 19, type: "fill_in", prompt: "The importance of community feedback loops for efficacy (A-D):", answer: "D" },
            { id: "inst-p2-2", type: "instruction", prompt: "Questions 20-26<br>Complete the summary below. Choose <b>ONE WORD ONLY</b>." },
            { id: 20, type: "fill_in", prompt: "Deploying interventions produces substantial _____ advantages.", answer: "systemic" },
            { id: 21, type: "fill_in", prompt: "Improvements are observed in efficiency and environmental _____.", answer: "stability" },
            { id: 22, type: "fill_in", prompt: "Logistical bottlenecks and capital _____ present challenges.", answer: "costs" },
            { id: 23, type: "fill_in", prompt: "Partnerships test subsidy models to lower _____ costs.", answer: "entry" },
            { id: 24, type: "fill_in", prompt: "Decentralized networks offer superior operational _____.", answer: "flexibility" },
            { id: 25, type: "fill_in", prompt: "Incorporating community feedback ensures long-term _____.", answer: "efficacy" },
            { id: 26, type: "fill_in", prompt: "Models help build resilience against external _____.", answer: "shocks" }
          ]
        },
        {
          id: 3,
          title: top3[0],
          passage_text: "The scientific analysis of " + top3[0] + " offers profound implications for complex system modeling. " + top3 + "\n\nFor decades, traditional frameworks assumed that equilibrium was governed by linear feedback principles. However, recent empirical findings have overturned this assumption, proving that non-linear dynamics dominate systemic responses.\n\nMathematical simulations reveal that minor initial variations can trigger cascading transformations across an entire network. Leading theorists stress that rigid deterministic models are incapable of forecasting these emergent behaviors, requiring adaptive multidisciplinary approaches.\n\nLooking forward, integrating machine-learning sensor networks with real-time empirical validation holds immense promise for developing proactive intervention strategies across global domains.",
          questions: [
            { id: "inst-p3-1", type: "instruction", prompt: "Questions 27-30<br>Choose the correct letter, A, B, C or D." },
            { id: 27, type: "mcq", prompt: "What does the writer indicate about traditional frameworks in paragraph 2?", options: ["A They accurately captured non-linear dynamics.", "B They relied on linear assumptions that have been overturned.", "C They were formulated using modern computer simulations.", "D They remain the universal standard across all disciplines."], answer: "B" },
            { id: 28, type: "mcq", prompt: "According to mathematical simulations in paragraph 3, minor initial variations", options: ["A are completely absorbed without causing systemic changes.", "B can trigger cascading transformations across networks.", "C are easily calculated using traditional deterministic equations.", "D have no impact on emergent behaviors."], answer: "B" },
            { id: 29, type: "mcq", prompt: "Why are rigid deterministic models considered inadequate by experts?", options: ["A They cannot accurately forecast emergent behaviors.", "B They are too expensive to install in universities.", "C They require too many real-time sensor connections.", "D They cannot process basic mathematical variables."], answer: "A" },
            { id: 30, type: "mcq", prompt: "What is the author's forward-looking conclusion in the final paragraph?", options: ["A Machine-learning sensor networks can enable proactive intervention strategies.", "B Theoretical modeling will soon be completely obsolete.", "C Global systems will achieve static equilibrium naturally.", "D Empirical validation should be discontinued in favor of speculation."], answer: "A" },
            { id: "inst-p3-2", type: "instruction", prompt: "Questions 31-36<br>Complete summary using options A-G:<br><b>A</b> - empirical findings | <b>B</b> - minor variations | <b>C</b> - linear principles<br><b>D</b> - proactive strategies | <b>E</b> - cascading transformations | <b>F</b> - non-linear dynamics | <b>G</b> - deterministic equations" },
            { id: 31, type: "fill_in", prompt: "Traditional models assumed equilibrium was governed by _____ (A-G).", answer: "C" },
            { id: 32, type: "fill_in", prompt: "Recent _____ (A-G) demonstrated that this was inaccurate.", answer: "A" },
            { id: 33, type: "fill_in", prompt: "Modern frameworks prove that _____ (A-G) dominate systemic responses.", answer: "F" },
            { id: 34, type: "fill_in", prompt: "Simulations demonstrate that _____ (A-G) can cause major shifts.", answer: "B" },
            { id: 35, type: "fill_in", prompt: "These variations frequently trigger _____ (A-G) across networks.", answer: "E" },
            { id: 36, type: "fill_in", prompt: "Sensor networks allow developers to implement _____ (A-G).", answer: "D" },
            { id: "inst-p3-3", type: "instruction", prompt: "Questions 37-40<br>Do the statements agree with the views of the writer?<br><b>YES</b> / <b>NO</b> / <b>NOT GIVEN</b>" },
            { id: 37, type: "tfng", prompt: "Non-linear dynamics play a primary role in complex system equilibrium.", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" },
            { id: 38, type: "tfng", prompt: "All computational labs agree on the exact mathematical formulas for cascading transformations.", options: ["YES", "NO", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: 39, type: "tfng", prompt: "Rigid analytical models are sufficient for forecasting emergent systemic behaviors.", options: ["YES", "NO", "NOT GIVEN"], answer: "NO" },
            { id: 40, type: "tfng", prompt: "Real-time sensory data can help turn theoretical models into proactive solutions.", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" }
          ]
        }
      ]
    };
  }
}
