const headEl = document.querySelectorAll(".head"),
  descriptionEl = document.querySelectorAll(".description"),
  DOMTitle = document.getElementById("head"),
  DOMDescription = document.getElementById("description"),
  submitBtn = document.getElementById("btn"),
  mainEl = document.querySelector(".main"),
  openBtn = document.querySelectorAll(".open");
const parent = document.querySelectorAll(".lists");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (DOMTitle.value !== "" && DOMDescription.value !== "") {
    // Creating Element
    const ul = document.createElement("ul");
    ul.classList.add("lists");
    const liFirst = document.createElement("li");
    liFirst.classList.add("head");
    liFirst.dataset = "new_file";

    const pFirst = document.createElement("p");
    pFirst.textContent = `What is ${DOMTitle.value}?`;

    const pSec = document.createElement("p");
    pSec.classList.add("open");
    const one = document.createElement("span");
    one.classList.add("one");
    one.textContent = "|";
    const two = document.createElement("span");
    two.classList.add("two");
    two.textContent = "|";
    const liSec = document.createElement("li");
    liSec.classList.add("description");
    liSec.dataset = "new_file_description";
    liSec.textContent = ` ${DOMDescription.value}.`;

    // Inserting The Ele on the page

    pSec.appendChild(one);
    pSec.appendChild(two);
    liFirst.appendChild(pSec);
    liFirst.appendChild(pFirst);
    ul.appendChild(liFirst);
    ul.appendChild(liSec);

    // console.log(ul);
    mainEl.appendChild(ul);
    // mainEl.insertBefore(mainEl, ul);

    DOMTitle.value = "";
    DOMDescription.value = "";
  } else return;
});
headEl.forEach((head) => {
  head.addEventListener("click", () => {
    console.log(this);
    const item = head.parentElement;
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
