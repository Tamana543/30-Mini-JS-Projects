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
    .querySelector(".dots__dot")
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
function nextSlide() {}
