const openBtn = document.querySelector(".open_btn");
const closeBtn = document.querySelector(".close_btn");
const links = document.querySelector(".links");

openBtn.addEventListener("click", function () {
  closeBtn.classList.toggle("hide");
  this.classList.toggle("hide");

  document.querySelector(".main-logo").classList.toggle("spin");

  document.querySelector(".links").style.left = "62rem";
});
closeBtn.addEventListener("click", function () {
  openBtn.classList.toggle("hide");
  this.classList.toggle("hide");
  this.querySelector(".close").classList.toggle("spin");
  document.querySelector(".links").style.left = "0rem";
});
