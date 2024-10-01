const sub_imgs = document.querySelectorAll(".sub_img");
sub_imgs.forEach((ele) => {
  ele.addEventListener("mouseover", function () {
    ele.style.transform = "scale3d(2, 2, 2)";
    ele.style.zIndex = "111";
  });
});
