const followers = document.querySelector(".followers");
const subscribers = document.querySelector(".subscroibers");
const visitors = document.querySelector(".visitors");

let counterEl = 0;
function counterEn() {
  counterEl = 0;
  let main = setInterval(() => {
    counterEl++;
    return counterEl;
  }, 10);
  followers.textContent, subscribers.textContent, (visitors.textContent = 0);
  followers.textContent = main;
  subscribers.textContent = main;
  visitors.textContent = main;
}
setInterval(counterEn, 10);
