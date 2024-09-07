const headEl = document.querySelectorAll(".head"),
  descriptionEl = document.querySelectorAll(".description"),
  DOMTitle = document.getElementById("head"),
  DOMDescription = document.getElementById("description"),
  submitBtn = document.getElementById("btn"),
  mainEl = document.querySelector(".main"),
  openBtn = document.querySelectorAll(".open");
const parent = document.querySelectorAll(".lists");

headEl.forEach((head) => {
  head.addEventListener("click", () => {
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
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (DOMTitle.value !== "" && DOMDescription.value !== "") {
    const html = ` 
  <ul class="lists">
  <li class="head" data-head="new_file">
    <p>What is ${DOMTitle.value}?</p>
    <p class="open">
      <span class="one">|</span> <span class="two">|</span>
    </p>
  </li>
  <li class="description" data-head="new_file_description">
     ${DOMDescription.value}.
  </li>
</ul>`;
    mainEl.insertAdjacentHTML("beforeend", html);
    console.log(headEl);
    const head = Array(...headEl);

    console.log(head);

    DOMTitle.value = "";
    DOMDescription.value = "";
  } else return;
});
