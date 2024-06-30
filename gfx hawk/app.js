document.addEventListener("DOMContentLoaded", function() {
  const phrases = ["Web Developer", "Digital Artist", "Freelancer"];
  let currentPhraseIndex = 0;
  const dynamicTextElement = document.querySelector(".dynamic-text");

  function typePhrase() {
      const currentPhrase = phrases[currentPhraseIndex];
      let currentText = "";
      let currentLetterIndex = 0;

      function typeLetter() {
          if (currentLetterIndex < currentPhrase.length) {
              currentText += currentPhrase[currentLetterIndex];
              dynamicTextElement.textContent = currentText;
              currentLetterIndex++;
              setTimeout(typeLetter, 100);
          } else {
              setTimeout(deletePhrase, 1000);
          }
      }

      function deletePhrase() {
          if (currentLetterIndex > 0) {
              currentText = currentText.slice(0, -1);
              dynamicTextElement.textContent = currentText;
              currentLetterIndex--;
              setTimeout(deletePhrase, 50);
          } else {
              currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
              setTimeout(typePhrase, 500);
          }
      }

      typeLetter();
  }

  typePhrase();
});
