const textMovedAll = document.getElementsByClassName("text_moved");

let text = [];
let currentLetter = 0;
let index = 0;

textMovedAll[currentLetter].style.opacity = 1;
for (let i = 0; i < textMovedAll.length; i++) {
  change(textMovedAll[i]);
}

function change(word) {
  let wordCont = word.innerHTML;
  word.innerHTML = "";
  let letters = [];
  for (let i = 0; i < wordCont.length; i++) {
    let letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = wordCont.charAt(i);
    word.appendChild(letter);

    letters.push(letter);
  }

  text.push(letters);
}

//Writing Letters

function write() {
  let word = text[currentLetter];

  let newWorld =
    currentLetter == textMovedAll.length - 1
      ? text[0]
      : text[currentLetter + 1];

  for (let i = 0; i < word.length; i++) {
    animateOut(word, i);
  }
  for (let i = 0; i < newWorld.length; i++) {
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
setInterval(write, 2000);
