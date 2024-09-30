const containerEl = document.querySelector(".boxes");
const loading = document.querySelector(".loading");
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
function randumEn(data) {
  const main = data[Math.floor(Math.random() * data.length)];
  return main;
}

function mainEn() {
  const html = `
  <div class="box">
        <h3 class="box_head">${randumEn(titles)}</h3>
        <p class="date">${randumEn(date)}</p>
        <p class="box_body">
          ${randumEn(body)}
        </p>
      </div>`;
  containerEl.insertAdjacentHTML("afterbegin", html);
}

window.addEventListener("scroll", function () {
  // console.log(this);
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loading.style.display = "block";
    setTimeout(() => {
      loading.style.display = "none";

      setTimeout(() => {
        mainEn();
      }, 500);
    }, 2000);
  }
});

for (let index = 0; index < 6; index++) {
  mainEn();
}
