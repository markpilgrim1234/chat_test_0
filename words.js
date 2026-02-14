const WORD_SOURCE = [
  {
    german: "Fernweh",
    type: "sostantivo neutro",
    definition: "Desiderio intenso di partire e vedere luoghi lontani.",
    sample: "Ich habe Fernweh und möchte die Welt entdecken.",
  },
  {
    german: "Geborgenheit",
    type: "sostantivo femminile",
    definition: "Sensazione di sicurezza, calore e protezione emotiva.",
    sample: "Bei meiner Familie fühle ich Geborgenheit.",
  },
  {
    german: "Feierabend",
    type: "sostantivo maschile",
    definition: "Momento in cui finisce il lavoro e inizia il tempo libero.",
    sample: "Nach dem Feierabend trinken wir zusammen einen Tee.",
  },
  {
    german: "Schadenfreude",
    type: "sostantivo femminile",
    definition: "Piacere provato per la sfortuna altrui.",
    sample: "Schadenfreude ist kein schönes Gefühl.",
  },
  {
    german: "Wanderlust",
    type: "sostantivo femminile",
    definition: "Forte voglia di viaggiare o camminare esplorando.",
    sample: "Im Frühling bekomme ich immer Wanderlust.",
  },
  {
    german: "Achtsamkeit",
    type: "sostantivo femminile",
    definition: "Attenzione consapevole al momento presente.",
    sample: "Achtsamkeit hilft mir, ruhiger zu bleiben.",
  },
  {
    german: "Heimat",
    type: "sostantivo femminile",
    definition: "Luogo o contesto in cui ci si sente a casa.",
    sample: "Für viele Menschen ist die Heimat ein Gefühl.",
  },
  {
    german: "Zeitgeist",
    type: "sostantivo maschile",
    definition: "Spirito del tempo, idee dominanti di un'epoca.",
    sample: "Dieses Design trifft den Zeitgeist.",
  },
];

function getDailyWord(date = new Date()) {
  const daySeed = Number(
    `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(
      date.getUTCDate()
    ).padStart(2, "0")}`
  );

  const index = daySeed % WORD_SOURCE.length;
  return WORD_SOURCE[index];
}
