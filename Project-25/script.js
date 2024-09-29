const containerEl = document.querySelector(".container");

window.addEventListener("scroll", function () {
  const html = `<div class="box">
        <h3 class="box_head">Lorem ipsum dolor sit amet,</h3>
        <p class="date">1995/2/14</p>
        <p class="box_body">
          consectetur adipisicing elit. Expedita, ipsam consequatur amet animi
          iure quo nam earum? Quos molestias corrupti ea. Magnam culpa magni
          officiis tenetur suscipit, labore accusantium quaerat.
        </p>
      </div>`;
  containerEl.insertAdjacentHTML("afterbegin", html);
});
