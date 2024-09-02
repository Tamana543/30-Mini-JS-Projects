const inputValue = document.getElementById("date_input"),
  dayEl = document.getElementById("day"),
  hourEl = document.getElementById("hour"),
  minEl = document.getElementById("min"),
  secEl = document.getElementById("sec");

[dayEl, hourEl, minEl, secEl].forEach((el) => (el.textContent = " "));
inputValue.addEventListener("input", function () {
  const givenDate = new Date(this.value);
  const date = new Date();
  console.log(date);
  dayEl.textContent = date.getDate();
  hourEl.textContent = date.getHours();
  minEl.textContent = date.getMinutes();
  secEl.textContent = date.getSeconds();
});
