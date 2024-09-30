const containerEl = document.querySelector(".container");
const heading = document.querySelector(".box_head");
const dateEl = document.querySelector(".date");

const boxPara = document.querySelector(".box_body");

// Arrays
const titles = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipisicing elit.",
  "Expedita, ipsam consequatur amet anim iure quo nam earum",
  "Ipsam consequatur amet an re quo nam earum?",
];

const date = ["2005/2/14", "2004/7/19", "2001/1/10", "1995/2/14", "2035/4/18"];

const body = [
  "consectetur adipisicing elit. Expedita, ipsam consequatur amet animiiure quo nam earum? Quos",
  "Magnam culpa magniofficiis tenetur suscipit, labore accusantium quaerat.",
  "consectetur adipisicing elit. Expedita, ipsam consequatur amet animiiure quo nam earum? Quos molestias corrupti ea. Magnam culpa magniofficiis tenetur suscipit, labore accusantium quaerat.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima tempore voluptas nostrum dicta soluta qui reiciendis dolorum. Facere accusamus minus non officia, ratione modi rerum atque exercitationem error enim alias.",
];
function mainEn(data) {
  const main = data[Math.floor(Math.random() * data.length)];
  return main;
}
// console.log(mainEn(body));
// window.addEventListener("scroll", function () {
//   const html = `<div class="box">
//         <h3 class="box_head">Lorem ipsum dolor sit amet,</h3>
//         <p class="date">1995/2/14</p>
//         <p class="box_body">
//           consectetur adipisicing elit. Expedita, ipsam consequatur amet animi
//           iure quo nam earum? Quos molestias corrupti ea. Magnam culpa magni
//           officiis tenetur suscipit, labore accusantium quaerat.
//         </p>
//       </div>`;
//   containerEl.insertAdjacentHTML("afterbegin", html);
// });
