
const CAMBRIDGE_TEST_1 = {
  book_id: "book_19",
  test_id: 1,
  passages: [
    {
      id: 1,
      title: "The Davies Sisters",
      passage_text: `Between 1908 and 1924, Gwendoline and Margaret Davies amassed one of the largest collections of late-nineteenth and early-twentieth-century French paintings in Britain...`,
      questions: [
        { id: 1, type: "fill_in", prompt: "their grandfather's wealth came from _____ and transportation businesses", answer: "mining" },
        { id: 2, type: "fill_in", prompt: "their _____ was designed to give them an interest in activities such as collecting art", answer: "education" },
        { id: 3, type: "fill_in", prompt: "they took lengthy _____ about the things they saw in art galleries", answer: "notes" },
        { id: 4, type: "fill_in", prompt: "their _____ showed they liked Old Master paintings, but they were expensive to buy", answer: "journals" },
        { id: 5, type: "fill_in", prompt: "the first Impressionist paintings they bought showed places in _____", answer: "Venice" },
        { id: 6, type: "fill_in", prompt: "they worked in a _____ for soldiers in France", answer: "canteen" },
        { id: 7, type: "fill_in", prompt: "were not considered typical collectors - they lived in isolation in the countryside and did not have any _____ who were artists", answer: "friends" },
        { id: 8, type: "tfng", prompt: "The Davies sisters' childhood influenced the way they decided to use their wealth.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
        { id: 9, type: "tfng", prompt: "The Jean-Baptiste-Camille Corot paintings in the Davies sisters' collection were purchased from a gallery in France.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
        { id: 10, type: "tfng", prompt: "Hugh Blaker opposed the Davies sisters' decision to buy art by French Impressionists.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
        { id: 11, type: "tfng", prompt: "The exhibition of Cezanne paintings at the Bath gallery was very popular with the public.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
        { id: 12, type: "tfng", prompt: "The impact of the First World War encouraged Gwendoline to reconsider her interest in collecting art.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
        { id: 13, type: "tfng", prompt: "The Davies sisters bought French Impressionist art during a period when very few people were doing so.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" }
      ]
    },
    {
      id: 2,
      title: "Why we need silence",
      passage_text: `A Humans are finely attuned to noise, and for good reason...`,
      questions: [
        { id: 14, type: "matching", prompt: "examples of strategies to decrease the noise that the public are exposed to", options: ["A", "B", "C", "D", "E", "F", "G"], answer: "C" },
        { id: 15, type: "matching", prompt: "data indicating the extent of the problem of excessive noise", options: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
        { id: 16, type: "matching", prompt: "a description of physiological changes in our bodies when we hear sudden noises", options: ["A", "B", "C", "D", "E", "F", "G"], answer: "A" },
        { id: 17, type: "matching", prompt: "evidence that a relatively quiet environment can be more beneficial than a totally silent one", options: ["A", "B", "C", "D", "E", "F", "G"], answer: "G" },
        { id: 18, type: "fill_in", prompt: "flotation tanks allow people to concentrate on their own _____, which helps them relax", answer: "breath" },
        { id: 19, type: "fill_in", prompt: "were given a _____ to complete before and after using a flotation tank", answer: "questionnaire" },
        { id: 20, type: "fill_in", prompt: "together with signs of relaxation and improved general _____", answer: "wellbeing" },
        { id: 21, type: "fill_in", prompt: "decreased activity in parts of the brain associated with _____", answer: "depression" },
        { id: 22, type: "matching", prompt: "It is unpleasant and upsetting for people to be placed in a silent environment against their will.", options: ["Nick Antonio", "Justin Feinstein", "Tai Dotan Ben-Soussan", "Eric Pfeifer"], answer: "Tai Dotan Ben-Soussan" },
        { id: 23, type: "matching", prompt: "The trend towards creating quieter urban locations is likely to increase in the coming years.", options: ["Nick Antonio", "Justin Feinstein", "Tai Dotan Ben-Soussan", "Eric Pfeifer"], answer: "Nick Antonio" },
        { id: 24, type: "matching", prompt: "When our body's senses are completely deprived of input, our minds compensate for this by creating the illusion of images and sounds.", options: ["Nick Antonio", "Justin Feinstein", "Tai Dotan Ben-Soussan", "Eric Pfeifer"], answer: "Justin Feinstein" },
        { id: 25, type: "matching", prompt: "Even a short amount of silent time can have a positive impact.", options: ["Nick Antonio", "Justin Feinstein", "Tai Dotan Ben-Soussan", "Eric Pfeifer"], answer: "Eric Pfeifer" },
        { id: 26, type: "matching", prompt: "External and internal quietness makes us more conscious of events occurring in our surroundings...", options: ["Nick Antonio", "Justin Feinstein", "Tai Dotan Ben-Soussan", "Eric Pfeifer"], answer: "Tai Dotan Ben-Soussan" }
      ]
    },
    {
      id: 3,
      title: "Book review: The World of Sugar by Ulbe Bosma",
      passage_text: `Ulbe Bosma's The World of Sugar is a genuinely global history...`,
      questions: [
        { id: 27, type: "mcq", prompt: "What does the reviewer suggest about the cultivation and trading of sugar in the first paragraph?", options: ["A", "B", "C", "D"], answer: "B" },
        { id: 28, type: "mcq", prompt: "In the second paragraph, when discussing the sugar market in Britain, the reviewer stresses", options: ["A", "B", "C", "D"], answer: "A" },
        { id: 29, type: "mcq", prompt: "What is the reviewer doing in the third paragraph?", options: ["A", "B", "C", "D"], answer: "C" },
        { id: 30, type: "mcq", prompt: "In the final paragraph, what does the reviewer suggest is the overall message of Bosma's book?", options: ["A", "B", "C", "D"], answer: "A" },
        { id: 31, type: "matching", prompt: "In the big industries in both Germany and the US, sugar farming depended on _____", options: ["migrant workers", "small-scale cultivation", "powerful individuals and businesses", "national governments", "financial controls", "less wealthy nations"], answer: "migrant workers" },
        { id: 32, type: "matching", prompt: "However, in other parts of the world such as South Asia and Latin America, _____ continued.", options: ["migrant workers", "small-scale cultivation", "powerful individuals and businesses", "national governments", "financial controls", "less wealthy nations"], answer: "small-scale cultivation" },
        { id: 33, type: "matching", prompt: "Sugar production has also involved _____ who were eager to protect their markets.", options: ["migrant workers", "small-scale cultivation", "powerful individuals and businesses", "national governments", "financial controls", "less wealthy nations"], answer: "powerful individuals and businesses" },
        { id: 34, type: "matching", prompt: "In countries such as Cuba the sugar industry therefore had a major influence on _____.", options: ["migrant workers", "small-scale cultivation", "powerful individuals and businesses", "national governments", "financial controls", "less wealthy nations"], answer: "national governments" },
        { id: 35, type: "matching", prompt: "To support the interests of sugar producers, _____ were established.", options: ["migrant workers", "small-scale cultivation", "powerful individuals and businesses", "national governments", "financial controls", "less wealthy nations"], answer: "financial controls" },
        { id: 36, type: "matching", prompt: "As a result of this, _____ were penalised.", options: ["migrant workers", "small-scale cultivation", "powerful individuals and businesses", "national governments", "financial controls", "less wealthy nations"], answer: "less wealthy nations" },
        { id: 37, type: "ynng", prompt: "Sugar has now become available in large quantities due to a range of agricultural developments.", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" },
        { id: 38, type: "ynng", prompt: "Advertisers initially marketed sugar as a luxury product.", options: ["YES", "NO", "NOT GIVEN"], answer: "NOT GIVEN" },
        { id: 39, type: "ynng", prompt: "The invention of high-fructose corn syrup was a positive development.", options: ["YES", "NO", "NOT GIVEN"], answer: "NO" },
        { id: 40, type: "ynng", prompt: "High-fructose corn syrup is an ingredient in many processed foods.", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" }
      ]
    }
  ]
};
