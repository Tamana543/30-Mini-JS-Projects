const hourEl = document.querySelector(".hour"),
  minEl = document.querySelector(".min"),
  secEl = document.querySelector(".sec"),
  unitEl = document.querySelector(".unit");

function timeEn() {
  const date = new Date();
  console.log(date);
  minEl.textContent = date.getMinutes();
  secEl.textContent = date.getSeconds();
  hourEl.textContent = date.getHours();
  unitEl.textContent = date.getHours() ? "PM" : "AM";
}

setInterval(timeEn, 1000);
