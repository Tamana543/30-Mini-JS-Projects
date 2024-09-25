const textBox = document.getElementById("text_box");
const optionsBox = document.getElementById("options_box");
let array = [];
function mainEn(event) {
  const text = event
    .split(".")
    .filter((ele) => ele.trim() !== "")
    .map((ele) => ele.trim());
  console.log(text);
  optionsBox.textContent = "";
  text.forEach((ele) => {
    const html = `
    <span class="option flex"
    >#${ele.replace(
      /\s{1,}/g,
      "_"
    )} <button type="button" class="close">X</button></span
     >
    `;

    optionsBox.insertAdjacentHTML("afterbegin", html);
  });
}

textBox.addEventListener("keyup", function (event) {
  mainEn(event.target.value);
});
