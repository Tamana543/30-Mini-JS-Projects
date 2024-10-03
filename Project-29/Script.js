const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close_btn");
const board = document.querySelector(".board");
let moves = document.querySelector(".moves");
let cardText = [];

closeModalBtn.addEventListener("click", () => {
  modal.classList.toggle("show_modal");
});
window.addEventListener("click", (event) => {
  event.target === modal ? modal.classList.toggle("show_modal") : "";
});
function shuffle(ele) {
  let currentIndex = ele.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = ele[currentIndex];
    ele[currentIndex] = ele[randomIndex];
    ele[randomIndex] = temporaryValue;
  }
  return ele;
}
