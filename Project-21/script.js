const beatuiful = document.querySelector(".beautifull"),
  incridible = document.querySelector(".incridible"),
  fantastic = document.querySelector(".fantastic"),
  amazing = document.querySelector(".amazing");
const textMovedAll = document.querySelectorAll(".text_moved");

let text = [];
let zero = 0;

setInterval(change, 2000);
function change() {
  textMovedAll.forEach(function (word) {
    word.style.opacity = "0";
  });
  textMovedAll[zero].style.opacity = "1";
  zero++;
  if (zero > textMovedAll.length - 1) {
    zero = 0;
  }
}

//Writing Letters (Simple)

let index = 0;
setInterval(write, 150);
function write() {
  let word = "beautiful.";
  textMovedAll[0].innerHTML = word.slice(0, index);
  index++;
  if (index > word.length) {
    index = 0;
  }
}
