const counterEl = document.querySelector(".counter"),
  alarmEl = document.querySelector(".clock"),
  notifyBtn = document.querySelector(".btn");

let clickCount = 0;
function alarmEn() {
  alarmEl.classList.toggle("transition");

  clickCount++;
  counterEl.textContent = clickCount;
}
notifyBtn.addEventListener("click", alarmEn);
