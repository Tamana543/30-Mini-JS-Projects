const sub_imgs = document.querySelectorAll(".sub_img");
const mainImgContainer = document.querySelector(".display_img");
const mainImg = document.querySelector(".display_img img");
sub_imgs.forEach((ele) => {
  //   ele.addEventListener("mouseover", function () {
  //     ele.style.transform = "scale3d(2, 2, 2)";
  //     ele.style.zIndex = "111";
  //   });
});

/*const images = document.querySelectorAll(".other__img img");
const imgShowBox = document.querySelector(".show__img");
const imgShow = document.querySelector(".show__img img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    imgShowBox.classList.add("active");
    imgShow.src = `${image.src}`;
  });
});

imgShowBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) {
		console.log("contains");
    imgShowBox.classList.remove("active");
    imgShow.src = "";
  }
});*/
