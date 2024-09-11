const imageContainer = document.querySelector(".captha_image"),
  reloadBtn = document.querySelector(".reload"),
  capInput = document.querySelector(".text"),
  submitBtn = document.querySelector(".submit");
function captionMakerEn() {
  imageContainer.textContent = "";
  const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(Math.random(input));
}
reloadBtn.addEventListener("click", captionMakerEn);
