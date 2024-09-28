const openBtn = document.querySelector(".open_btn");
// const closeBtn = document.querySelector(".close_btn");
const links = document.querySelector(".links");

openBtn.addEventListener("click", function () {
  //   this.classList.add("spin");
  //   this.classList.toggle("hide");

  this.classList.toggle("spin");
  this.textContent = "";
  const span = document.createElement("span");
  span.textContent = "X";
  span.classList.add("close_btn");
  this.appendChild(span);
  //   this.textContent = `<span class="line">|</span>
  //           <span class="line_2">|</span>`;
  //   this.classList.toggle("hide");

  //   this.style.animation = "spin 1s linear";
  document.querySelector(".close_btn").addEventListener("click", function () {
    this.classList.add("spin");
    this.textContent = "";
    this.textContent = `<img src="main _logo.png" alt="main-logo" />`;
    this.classList.add("open_btn");
  });
});
// closeBtn.addEventListener("click", function () {
//   this.classList.toggle("hide");
//   this.classList.toggle("spin");
// });
