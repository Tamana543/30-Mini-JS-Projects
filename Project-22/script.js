const followers = document.querySelector(".followers");
const subscribers = document.querySelector(".subscroibers");
const visitors = document.querySelector(".visitors");

let counterEl = 0;
function counterEn() {
  followers.textContent = 0;
  counterEl = 0;
  counterEl++;
  followers.textContent = counterEl;
}
setInterval(counterEn, 10);
