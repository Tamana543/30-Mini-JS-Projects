const inputValue = document.getElementById("date_input"),
  dayEl = document.getElementById("day"),
  hourEl = document.getElementById("hour"),
  minEl = document.getElementById("min"),
  secEl = document.getElementById("sec"),
  heading = document.querySelector(".heading"),
  body = document.querySelector("body");

[dayEl, hourEl, minEl, secEl].forEach((el) => (el.textContent = " "));
let time;
function timerEn() {
  const givenDate = new Date(inputValue.value);
  const date = new Date();
  let sec = date.getSeconds();
  let hour = date.getHours();
  let min = date.getMinutes();
  let day = date.getDate();
  time = setInterval(function () {
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

    if (main < 0) {
      dayEl.textContent = 0;
      hourEl.textContent = 0;
      minEl.textContent = 0;
      secEl.textContent = 0;
      clearInterval(time);
      heading.textContent = "Time Is Up , Well Done 😀";
      body.style.backgroundColor = "#ffff";
    }
    dayEl.textContent = main;
    hourEl.textContent = hour;
    minEl.textContent = min;
    secEl.textContent = sec;
  }, 1000);
}
inputValue.addEventListener("input", () => {
  if (time) clearInterval(time);
  timerEn();
});
