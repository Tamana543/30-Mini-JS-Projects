const beatuiful = document.querySelector(".beautifull"),
  incridible = document.querySelector(".incridible"),
  fantastic = document.querySelector(".fantastic"),
  amazing = document.querySelector(".amazing");
const textMovedAll = document.querySelectorAll(".text_moved");

let text = [];
let currentLetter = 0;
let index = 0;

function change(word) {
  let wordCont = word.innerHTML;
  console.log(wordCont);
  wordCont.innerHTML = "";
  let letters = [];
  for (let i = 0; i < wordCont.length; i++) {
    let letter = document.createElement("letter");
    letter.className = "letter";
    letter.innerHTML = wordCont.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  text.push(letters);

  // other way for making this function working
  // textMovedAll.forEach(function (word) {
  //   // word.style.display = "none";
  //   word.style.opacity = "0";
  // });
  // textMovedAll[currentLetter].style.opacity = "1";
  // currentLetter++;

  // if (currentLetter > textMovedAll.length - 1) {
  //   currentLetter = 0;
  // }
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
  console.log(word);

  // textMovedAll[0].innerHTML = word.slice(0, index);
  // index++;
  // if (index > word.length) {
  //   index = 0;
  // }
}
write();
// setInterval(write, 150);
