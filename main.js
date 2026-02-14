const button = document.getElementById("today-word-btn");

if (button) {
  const todayWord = getDailyWord();

  button.textContent = `Scopri: ${todayWord.german}`;
  button.addEventListener("click", () => {
    localStorage.setItem("dailyGermanWord", JSON.stringify(todayWord));
    window.location.href = "parola.html";
  });
}
