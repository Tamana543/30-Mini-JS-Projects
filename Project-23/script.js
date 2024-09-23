const textBox = document.getElementById("text_box");
const optionsBox = document.getElementById("options_box");
let array = [];
function mainEn(event) {
  const text = textBox.value;
  //
  array.unshift(text);
  const main = new Set(array);
  console.log(main);
  const html = `
<span class="option flex"
>${text} <button type="button" class="close">X</button></span
 >
`;
  optionsBox.insertAdjacentHTML("afterbegin", html);
  //   main.forEach((ele, i) => {
  //     const html = `
  //         <span class="option flex"
  //        >${ele} <button type="button" class="close">X</button></span
  //         >
  //       `;

  //     optionsBox.insertAdjacentHTML("afterbegin", html);
  //   });
  //   main.shift();
  console.log(main);
}

document.addEventListener("keypress", function (event) {
  const main = event.key;
  if (main === ".") mainEn(main);
});
