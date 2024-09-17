const allBtn = document.querySelector(".btn"),
  redBtn = document.querySelector(".red_btn"),
  greenBtn = document.querySelector(".green_btn"),
  blueBtn = document.querySelector(".blue_btn");
const boxes = document.querySelectorAll(".box");
const boxEl = ["red", "green", "blue"];
allBtn.addEventListener("click", () => {
  boxes.forEach((ele) => (ele.style.display = "inline"));
});
redBtn.addEventListener("click", () => {
  boxes.forEach((ele) => {
    ele.classList.contains("red_box")
      ? (ele.style.display = "inline")
      : (ele.style.display = "none");
  });
});
greenBtn.addEventListener("click", () => {
  boxes.forEach((ele) => {
    ele.classList.contains("green_box")
      ? (ele.style.display = "inline")
      : (ele.style.display = "none");
  });
});
blueBtn.addEventListener("click", () => {
  boxes.forEach((ele) => {
    ele.classList.contains("blue_box")
      ? (ele.style.display = "inline")
      : (ele.style.display = "none");
  });
});
