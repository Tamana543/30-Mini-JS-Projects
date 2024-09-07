const headEl = document.querySelectorAll(".head"),
  descriptionEl = document.querySelectorAll(".description"),
  DOMTitle = document.getElementById("head"),
  DOMDescription = document.getElementById("description"),
  submitBtn = document.getElementById("btn"),
  mainEl = document.querySelector(".main"),
  openBtn = document.querySelectorAll(".open");
const parent = document.querySelector(".lists");
headEl.forEach((head) => {
  head.addEventListener("click", () => {
    const item = head.parentElement;
    console.log(item);
    const content = item.querySelector(".description");
    descriptionEl.forEach((ele) => {
      if (ele !== content) {
        ele.classList.remove("active");
        item.querySelector(".two").style.transform = `rotate(90deg)`;
      } else {
      }
    });
    content.classList.toggle("active");
    if (content.classList.contains("active")) {
      item.querySelector(".two").style.transform = `rotate(90deg)`;
      content.style.minHeight = content.scrollHeight + "px";
    } else {
      item.querySelector(".two").style.transform = `rotate(0deg)`;
      content.style.minHeight = "0px";
    }
  });
});
