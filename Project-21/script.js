const beatuiful = document.querySelector(".beautifull");
const textMovedAll = document.querySelectorAll(".text_moved");

let text = [];
let currentLetter = 0;
let index = 0;

function change(word) {
  let wordCont = word.innerHTML;
  word.innerHTML = "";
  let letters = [];
  for (let i = 0; i < wordCont.length; i++) {
    let letter = document.createElement("letter");
    letter.className = "letter";
    letter.innerHTML = wordCont.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  text.push(letters);
}
textMovedAll[currentLetter].style.opacity = 1;

for (let i = 0; i < textMovedAll.length; i++) {
  change(textMovedAll[i]);
}
// setInterval(change, 2000);

//Writing Letters

function write() {
  let word = text[currentLetter];

  let newWorld =
    currentLetter === textMovedAll.length - 1
      ? text[0]
      : text[currentLetter + 1];

  for (let i = 0; i < newWorld.length; i++) {
    animateOut(word, i);
  }
  for (let i = 0; i < word.length; i++) {
    newWorld[i].className = "letter behind";
    newWorld[0].parentElement.style.opacity = 1;
    animateIn(newWorld, i);
  }
  word = word == text.length - 1 ? 0 : word + 1;
}
function animateOut(word, i) {
  setTimeout(() => {
    word[i].className = "letter out";
  }, i * 80);
}
function animateIn(newWorld, i) {
  setTimeout(() => {
    newWorld[i].className = "letter in";
  }, 340 + i * 80);
}
write();
// setInterval(write, 150);
