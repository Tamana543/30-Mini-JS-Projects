const inputValue = document.getElementById("date_input"),
  dayEl = document.getElementById("day"),
  hourEl = document.getElementById("hour"),
  minEl = document.getElementById("min"),
  secEl = document.getElementById("sec");

[dayEl, hourEl, minEl, secEl].forEach((el) => (el.textContent = " "));
function timerEn() {
  const givenDate = new Date(inputValue.value);
  const date = new Date();
  let sec = date.getSeconds();
  let hour = date.getHours();
  let min = date.getMinutes();
  let day = date.getDate();
  setInterval(function () {
    // debugger;
    sec--;
    if (sec < 0) {
      sec = 60;
      min = min - 1;
    }
    if (min < 0) {
      min = 60;
      hour = hour - 1;
    }
    if (hour < 0) {
      hour = 24;
      day = day - 1;
    }

    let main = Math.abs(day - givenDate.getDate());

    if (main < 0) clearInterval(timerEn);
    dayEl.textContent = main;
    hourEl.textContent = hour;
    minEl.textContent = min;
    secEl.textContent = sec;
  }, 1000);
}
inputValue.addEventListener("input", () => {
  if (timerEn) clearInterval(timerEn);
  timerEn();
});
