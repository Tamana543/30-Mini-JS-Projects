const sub_imgs = document.querySelectorAll(".sub_img");
const mainImgContainer = document.querySelector(".display_img");
const mainImg = document.querySelector(".display_img img");
sub_imgs.forEach((ele) => {
  ele.addEventListener("click", function () {
    mainImgContainer.classList.add("active");
    mainImg.src = `${ele.src}`;
  });
});

mainImgContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("active")) {
    console.log(`Heekkdkkd`);
    mainImgContainer.classList.remove("active");
    mainImg.src = "";
  }
});
