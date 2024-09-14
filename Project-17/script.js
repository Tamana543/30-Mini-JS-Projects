const counterEl = document.querySelector(".counter"),
  alarmEl = document.querySelector(".clock"),
  notifyBtn = document.querySelector(".btn");

let clickCount = 0;
function alarmEn() {
  clickCount++;
  counterEl.textContent = clickCount;

  alarmEl.classList.toggle("transition");
}
notifyBtn.addEventListener("click", alarmEn);
alarmEl.addEventListener("animationend", function () {
  alarmEl.classList.remove("transition");
});
