const needMinute = document.querySelector(".minute");
const needSec = document.querySelector(".sec");
const needHour = document.querySelector(".hour");

function rotationEn(elemene, rotation) {
  elemene.style.transform = `rotate(${rotation}deg)`;
}
function dateEn() {
  const date = new Date();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const hour = date.getHours();
  const miliSec = date.getMilliseconds();
  const secRotation = (sec / 60) * 360;
  const minRotation = (min / 60) * 360;
  const hourRotation = (hour / 12) * 360;
  rotationEn(needSec, secRotation);
  rotationEn(needMinute, minRotation);
  rotationEn(needHour, hourRotation);
}

setInterval(dateEn, 5);
dateEn();
