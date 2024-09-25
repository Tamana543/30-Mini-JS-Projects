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
    // optionsBox.appendChild(html);
    optionsBox.insertAdjacentHTML("afterbegin", html);
  });

  // array.unshift(text);
  // const main = new Set(array);
  // console.log(main);

  // optionsBox.insertAdjacentHTML("afterbegin", html);

  // main.forEach((ele, i) => {
  //   const html = `
  //         <span class="option flex"
  //        >${ele} <button type="button" class="close">X</button></span
  //         >
  //       `;

  //   optionsBox.insertAdjacentHTML("afterbegin", html);
  // });
  // main.shift();
  // console.log(main);
}

// document.addEventListener("keypress", function (event) {
//   const main = event.key;
//   if (main === ".") mainEn(main);
// });
textBox.addEventListener("keyup", function (event) {
  mainEn(event.target.value);
});
