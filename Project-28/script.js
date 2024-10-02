const headS = document.querySelectorAll(".head");
const boxes = document.querySelectorAll(".text_body");

headS.forEach((head, i) => {
  head.addEventListener("click", function () {
    const item = head.parentElement;
    console.log(item);
    const description = item.querySelector(".text_body");
    const btn = item.querySelector(".btn");
    console.log(description);
    boxes.forEach((ele) => {
      if (ele === description) {
        ele.classList.remove("visible");
        btn.style.transform = "rotate(90deg)";
      }
    });
    description.classList.toggle("visible");
    if (description.classList.contains("visible")) {
      description.classList.add("visible");
      btn.style.transform = "rotate(90deg)";
    } else {
      description.classList.remove("visible");
      btn.style.transform = "rotate(30deg)";
    }
  });
});
