const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close_btn");
const board = document.querySelector(".board");
let moves = document.querySelector(".moves");
let cardText = [];
let moveCounter = 0;
let match = 0;
let isFirstClick = true;
let timerID;
let isRestart = false;
let cards = [
  "diamond",
  "diamond",
  "plane",
  "plane",
  "anchor",
  "anchor",
  "bolt",
  "bolt",
  "leaf",
  "leaf",
  "bicycle",
  "bicycle",
  "cube",
  "cube",
  "bomb",
  "bomb",
];

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
let sguffleCards = shuffle(cards);
function createCards() {
  for (let card of sguffleCards) {
    const li = document.createElement("li");
    li.classList.toggle("card");
    const i = document.createElement("i");
    i.classList.toggle("fa");
    if (card === "plane") {
      i.classList.toggle("fa-paper-plane-o");
    } else {
      i.classList.toggle(`fa-${card}`);
    }
    const board = document.querySelector(".board");
    li.appendChild(i);
    board.appendChild(li);
  }
}
function showCard(card) {
  card.classList.add("show");
}
function initGame() {
  createCards();
  const card = document.querySelectorAll(".card");
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener(
      "click",
      function (event) {
        if (card[i] !== event.target) return;
        if (event.target.classList.contains("show")) return;
        if (isFirstClick) {
          timerID = setInterval(timer, 1000);
          isFirstClick = false;
        }
        showCard(event.target);
        setTimeout(addCard, 550, sguffleCards[i], event.target, cardText, i);
      },
      false
    );
  }
}
