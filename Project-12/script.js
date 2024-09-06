const headEl = document.querySelectorAll(".head"),
  descriptionEl = document.querySelectorAll(".description"),
  DOMTitle = document.getElementById("head"),
  DOMDescription = document.getElementById("description"),
  submitBtn = document.getElementById("btn"),
  mainEl = document.querySelector(".main"),
  openBtn = document.querySelectorAll(".open");

openBtn.forEach((ele) => {
  //   console.log(headEl[0].dataset);
  //   console.log(ele.dataset);
  ele.addEventListener("click", function () {
    //     debugger;
    //     console.log(this.dataset);
    const data = headEl.forEach((ele) => ele.dataset);
    descriptionEl.forEach((ele) => {
      if (ele.dataset === data) {
        ele.style.display = "block";
      } else {
        console.log(ele.dataset.head);
        console.log(data);
      }
      // ele.dataset === headEl.dataset ? (ele.style.display = "block") : "Bugg";
    });
    //     document.querySelector(".two").style.transform = "rotate(90deg)";
    //     if (this.dataset === descriptionEl.dataset) {
    //       console.log(`Hello`);
    //     }
  });
});
