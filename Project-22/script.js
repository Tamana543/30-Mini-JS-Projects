const followers = document.querySelector(".followers");
const subscribers = document.querySelector(".subscroibers");
const visitors = document.querySelector(".visitors");
const containerEl = document.querySelector(".container");
let counterEl = 0;
let target;
let elements = [followers, subscribers, visitors];
function counterEn(element) {
  //   debugger;
  target = +element.dataset.number;

  counterEl = 0;
  let main = setInterval(() => {
    counterEl++;
    return counterEl;
  }, 10);
  if (main <= target) {
    element.textContent = 0;
    element.textContent = main;
    clearInterval(main);
  } else {
    element.textContent = target;
  }
  //   subscribers.textContent = main;
  //   visitors.textContent = main;
}
elements.forEach((ele) => {
  setInterval(function () {
    counterEn(ele);
  }, 10);
});
