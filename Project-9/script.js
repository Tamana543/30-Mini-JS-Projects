const mainImage = document.querySelector(".main_image"),
  widthEl = document.getElementById("width"),
  borderRadiusEl = document.getElementById("borderRadius"),
  colorEl = document.getElementById("color"),
  paddingEl = document.getElementById("padding"),
  blurEl = document.getElementById("blur");

widthEl.addEventListener("input", () => {
  mainImage.style.height = `${widthEl.value}%`;
  mainImage.style.width = `${widthEl.value}%`;
});
borderRadiusEl.addEventListener("input", () => {
  mainImage.style.borderRadius = `${borderRadiusEl.value}%`;
});
colorEl.addEventListener("input", () => {
  mainImage.style.backgroundColor = `${colorEl.value}`;
});
paddingEl.addEventListener("input", () => {
  mainImage.style.padding = `${paddingEl.value / 9}%`;
});
blurEl.addEventListener("input", () => {
  mainImage.style.filter = `blur(${blurEl.value / 10}px)`;
});
