const slides = document.querySelectorAll(".slide"),
  slider = document.querySelector(".slider"),
  btnLeft = document.getElementById("leftBtn"),
  btnRight = document.getElementById("rightBtn"),
  dotBox = document.querySelector(".dots");
let currentSlide = 0;
const maxSlide = slides.length;

function createDot() {
  slides.forEach((_, i) => {
    dotBox.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
}
function activeDots(slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
}
function goSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}
function nextSlide() {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goSlide(currentSlide);
  activeDots(currentSlide);
}
function preSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goSlide(currentSlide);
  activeDots(currentSlide);
}
function init() {
  goSlide(0);
  createDot();
  activeDots(0);
}
init();

dotBox.addEventListener("click", function (event) {
  if (event.target.classList.contains("dots__dot")) {
    const { slide } = event.target.dataset;
    goSlide(slide);
    activeDots(slide);
  }
});

btnLeft.addEventListener("click", preSlide);
btnRight.addEventListener("click", nextSlide);
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    nextSlide();
  }
  if (event.key === "ArrowLeft") {
    preSlide();
  }
});
