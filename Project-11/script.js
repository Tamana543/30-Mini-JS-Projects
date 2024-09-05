const eyeEl = document.querySelectorAll(".brown_eye"),
  smileEl = document.querySelector(".jerry_smile"),
  pocket = document.querySelector(".pocket");

pocket.onmousemove = () => {
  smileEl.style.display = "none";
  document.querySelector(".jerry_angry ").style.display = "block";
};

document.body.onmousemove = (event) => {
  // coordinates
  const x = (event.clientX * 55) / window.innerWidth + "%";
  const y = (event.clientY * 55) / window.innerHeight + "%";
  //   console.log(x);
  //   console.log(y);
  eyeEl.forEach((eye) => {
    eye.style.left = x;
    eye.style.top = y;
  });
};
