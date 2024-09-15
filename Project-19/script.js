const line = document.querySelector(".line"),
  previousBtn = document.querySelector(".previous"),
  nextBtn = document.querySelector(".next"),
  numberEl = document.querySelector(".number");
nextBtn.addEventListener("click", function () {
  numberEl.classList.add("number_animation");
  line.classList.add("line_animation");
});
previousBtn.addEventListener("click", function () {
  numberEl.classList.remove("number_animation");
  line.classList.remove("line_animation");
});
