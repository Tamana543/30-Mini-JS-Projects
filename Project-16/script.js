const tabs = document.querySelectorAll(".tab"),
  tabContainer = document.querySelector(".tabs_bar"),
  textBoxes = document.querySelectorAll(".text");

function mainEn(event) {
  const click = event.target.closest(".tab");

  if (!click) return;
  tabs.forEach((tab) => tab.classList.remove("active"));
  textBoxes.forEach((text) => text.classList.add("hide"));

  click.classList.add("active");
  document
    .querySelector(`.text_cont--${click.dataset.title}`)
    .classList.remove("hide");
}
tabContainer.addEventListener("click", mainEn);
