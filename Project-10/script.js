const miliSec = document.querySelector(".mili_sec"),
  sec = document.querySelector(".sec"),
  min = document.querySelector(".min"),
  playBtn = document.querySelector(".play"),
  stoBtn = document.querySelector(".stop"),
  restartBtn = document.querySelector(".restart");
let timer;
let miliSecEl = 0;
let secEl = 0;
let minEl = 0;

playBtn.addEventListener("click", () => {
  timer = setInterval(function () {
    miliSecEl++;

    miliSec.textContent = String(miliSecEl).padStart(2, 0);

    //     miliSecEl === 1000 ? secEl++ : "";
    if (miliSecEl === 99) {
      miliSecEl = String(0).padStart(2, 0);
      miliSecEl++;
      secEl++;
    }
    sec.textContent = secEl;

    if (secEl === 60) {
      secEl = String(0).padStart(2, 0);
      secEl++;
      minEl++;
      console.log(minEl);
    }
    sec.textContent = String(secEl).padStart(2, 0);

    min.textContent = minEl;
  });
});
stoBtn.addEventListener("click", () => clearInterval(timer));
restartBtn.addEventListener("click", () => {
  miliSecEl = 0;
  secEl = 0;
  minEl = 0;
  clearInterval(timer);
  sec.textContent = secEl;
  miliSec.textContent = miliSecEl;
  min.textContent = minEl;
});
