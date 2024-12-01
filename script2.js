
const typingText = ["Developer", "Creator", "Problem Solver"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const typingElement = document.querySelector(".typing");
  if (i < typingText.length) {
    if (!isDeleting && j <= typingText[i].length) {
      currentText = typingText[i].substring(0, j++);
      typingElement.textContent = currentText;
    } else if (isDeleting && j > 0) {
      currentText = typingText[i].substring(0, j--);
      typingElement.textContent = currentText;
    }

    if (j === typingText[i].length) isDeleting = true;
    if (j === 0) {
      isDeleting = false;
      i++;
    }
    if (i === typingText.length) i = 0;
  }
  setTimeout(type, isDeleting ? 50 : 150);
}

document.addEventListener("DOMContentLoaded", type);
