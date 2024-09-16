const line = document.querySelector(".line"),
  previousBtn = document.querySelector(".previous"),
  nextBtn = document.querySelector(".next"),
  numberEl = document.querySelectorAll(".number");

let move = 1;
function moveEnForword() {
  numberEl.forEach((ele, i) => {
    if (i < move) {
      ele.classList.add("number_animation");
    } else {
      ele.classList.remove("number_animation");
    }
  });

  // moveEnForword();
  const movedNum = document.querySelector(".number_animation");
  line.style.width = `${
    ((movedNum.length - 1) / (numberEl.length - 1)) * 100
  }%`;
  console.log(`${((movedNum.length - 1) / (numberEl.length - 1)) * 100}%`);
  if (move === 1) {
    previousBtn.disabled = true;
  } else if (move === numberEl.length) {
    nextBtn.disabled = true;
  } else {
    previousBtn.disabled, (nextBtn.disabled = false);
  }
}
nextBtn.addEventListener("click", function () {
  move++;
  if (move > numberEl.length) {
    move = numberEl.length;
  }
  moveEnForword();
});
previousBtn.addEventListener("click", function () {
  move--;
  if (move < 1) {
    move = 1;
  }
  moveEnForword();
});
// nextBtn.addEventListener("click", moveEnForword);
// nextBtn.addEventListener("click", function () {
//   numberEl.forEach((ele) => ele.classList.add("number_animation"));
//   line.classList.add("line_animation");
// });
// previousBtn.addEventListener("click", function () {
//   numberEl.forEach((ele) => ele.classList.remove("number_animation"));
//   line.classList.remove("line_animation");
// });
