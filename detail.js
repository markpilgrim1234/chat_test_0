const wordEl = document.getElementById("german-word");
const typeEl = document.getElementById("word-type");
const definitionEl = document.getElementById("italian-definition");
const sampleEl = document.getElementById("sample-sentence");

const storedWord = localStorage.getItem("dailyGermanWord");
const word = storedWord ? JSON.parse(storedWord) : getDailyWord();

if (wordEl && typeEl && definitionEl && sampleEl) {
  wordEl.textContent = word.german;
  typeEl.textContent = word.type;
  definitionEl.textContent = word.definition;
  sampleEl.textContent = `Esempio: ${word.sample}`;
}
