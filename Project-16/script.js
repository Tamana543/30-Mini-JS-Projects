const tab = document.querySelectorAll(".tab"),
  textBoxes = document.querySelectorAll(".text");

function mainEn() {
  tab.forEach((tab) => {
    textBoxes.forEach((box) => {
      if (tab.dataset.title === box.dataset.title) {
        console.log(box);
        box.classList.toggle("hide");
        tab.classList.toggle("active");
      }
    });
  });
}
tab.forEach((tab) => tab.addEventListener("click", mainEn));
