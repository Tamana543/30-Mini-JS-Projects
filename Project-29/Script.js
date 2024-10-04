const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close_btn");
const board = document.querySelector(".board");
let moves = document.querySelector(".moves");
let restart = document.querySelector(".restart");
let timerEl = document.querySelector(".timer");
const newGameBtn = document.querySelector(".new_game");
let cardText = [];
let moveCounter = 0;
let match = 0;
let isFirstClick = true;
let timerID;
let isRestart = false;
let cards = [
  "coolFace.jfif",
  "coolFace.jfif",
  "happyFace.jfif",
  "happyFace.jfif",
  "hearthFace.jfif",
  "hearthFace.jfif",
  "hugging.jfif",
  "hugging.jfif",
  "kissFace.jfif",
  "kissFace.jfif",
  "monyFace.jfif",
  "monyFace.jfif",
  "sadFace.jfif",
  "sadFace.jfif",
  "shuckedFace.jfif",
  "shuckedFace.jfif",
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
let shuffleCardEn = shuffle(cards);
let img;
function createCards() {
  for (let card of shuffleCardEn) {
    // <img src="" alt="" >
    const li = document.createElement("li");
    li.classList.toggle("card");
    img = document.createElement("img");
    // img.classList.toggle("card");
    const i = document.createElement("i");
    i.classList.toggle("fa");
    // const imgSrc = img.src;

    img.src = `${card}`;

    const board = document.querySelector(".board");
    li.appendChild(img);
    board.appendChild(li);
  }
}
function showCard(card) {
  card.classList.add("show");
  // img.style.width = "80%";
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

        setTimeout(addCard, 550, shuffleCardEn[i], event.target, cardText, i);
      },
      false
    );
  }
}
function addCard(card, cardHTML, testList, pos) {
  if (isRestart) {
    testList.length = 0;
    isRestart = false;
  }
  testList.push(card), testList.push(cardHTML);
  testList.push(pos);
  if (testList.length === 6) {
    updateMoveCounter();
    testCards(
      testList[0],
      testList[1],
      testList[2],
      testList[3],
      testList[4],
      testList[5]
    );
    testList.length = 0;
  }
}
function testCards(card1, html1, x1, card2, html2, x2) {
  if (card1 === card2 && x1 != x2) {
    cardsMatch(html1, html2);
  } else {
    cardsDontMatch(html1, html2);
  }
}
function cardsMatch(card1, card2) {
  card1.classList.add("match");
  card2.classList.add("match");
  match++;
  if (match === 8) {
    winingEn();
  }
}
function cardsDontMatch(card1, card2) {
  card1.classList.add("no-match");
  card2.classList.add("no-match");
  setTimeout(() => {
    card1.classList.toggle("no-match");
    card2.classList.toggle("no-match");
    card2.classList.toggle("show");
    card2.classList.toggle("show");
  }, 300);
}
let min = 0;
let second = 0;
function winingEn() {
  clearInterval(timerID);
  modal.classList.toggle("show_modal");
  const stats = document.querySelector(".stats");
  if (second % 60 < 10) {
    stats.textContent = `You won with ${moveCounter} moves with time:  ${min}:0 ${
      second % 60
    }`;
  } else {
    stats.textContent = `You won with ${moveCounter} moves with time:  ${min}:0 ${
      second % 60
    }`;
  }
}
function updateMoveCounter() {
  moveCounter++;
  moves.textContent = `${moveCounter};
  `;
}
function timer() {
  second++;
  min = Math.floor(second / 60);

  if (second % 60 < 10) {
    timerEl.textContent = `${min} : 0${second % 60}`;
  } else {
    timerEl.textContent = `${min} : ${second % 60}`;
  }
}
restart.addEventListener("click", restartGame, false);
function restartGame() {
  clearInterval(timerID);
  moveCounter = 0;
  second = 0;
  min = 0;
  isFirstClick = true;
  isRestart = true;
  const board = document.querySelector(".board");
  let elements = board.getElementsByClassName("card");

  while (elements[0]) {
    elements[0].removeChild([elements[0]]);
  }
  shuffleCardEn = shuffle(cards);
  timerEl.textContent = `0:00`;
  moves.textContent = `Moves: ${moveCounter}`;
  initGame();
}

newGameBtn.addEventListener("click", () => {
  modal.classList.toggle("show_modal");
  restartGame();
});
initGame();
