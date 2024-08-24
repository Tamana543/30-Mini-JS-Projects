const needMinute = document.querySelector(".minute"),
  needSec = document.querySelector(".sec"),
  needHour = document.querySelector(".hour");

const data_text = document.querySelector(".data_text");
function rotationEn(elemene, rotation) {
  elemene.style.transform = `rotate(${rotation}deg)`;
}
function dateEn() {
  const date = new Date();
  // console.log(date);
  const year = date.getFullYear();
  const day = date.getDate();
  const hour = date.getHours();
  let am_pm = hour >= 12 ? "PM" : "AM";
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const weekDays = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
  const weekDay = weekDays[date.getDay()];
  const secRotation = (sec / 60) * 360;
  const minRotation = (min / 60) * 360;
  const hourRotation = (hour / 12) * 360;

  data_text.textContent = `${year} ${weekDay} ${day} ${am_pm}`;
  rotationEn(needSec, secRotation);
  rotationEn(needMinute, minRotation);
  rotationEn(needHour, hourRotation);
}

setInterval(dateEn, 5);
dateEn();
