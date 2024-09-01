"use strict";
const numberEl = document.querySelector(".number"),
  decrease = document.querySelector(".negative"),
  increase = document.querySelector(".plus"),
  restart = document.querySelector(".restart");

let curNumber = 1;
let main = () => (numberEl.textContent = curNumber);
decrease.addEventListener("click", () => {
  curNumber--;
  main();
});
increase.addEventListener("click", () => {
  curNumber++;
  main();
});
restart.addEventListener("click", () => {
  curNumber = 0;
  main();
});
