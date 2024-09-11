const imageContainer = document.querySelector(".captha_image"),
  reloadBtn = document.querySelector(".reload"),
  capInput = document.querySelector(".text"),
  submitBtn = document.querySelector(".submit");

let code;
function captionMakerEn() {
  // debugger;
  imageContainer.textContent = "";
  const input =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*:";
  let lengthEl = 6;
  const captcha = [];
  for (let i = 0; i < lengthEl; i++) {
    // to avoid repetation of code
    const main = Math.floor(Math.random() * input.length + 1); //to get next character
    if (captcha.indexOf(input[main]) == -1) captcha.push(input[main]);
    else i--;
  }
  const imageConv = document.createElement("canvas");
  imageConv.id = "captcha";
  imageConv.width = 100;
  imageConv.height = 50;
  const ctx = imageConv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  code = captcha.join("");

  imageContainer.appendChild(imageConv); //add the canvas to the body element
}
function validationEn(event) {
  event.preventDefault();
  if (capInput.value == code) {
    alert("Well Done");
    imageContainer.textContent = "";
    capInput.value = "";
  } else {
    alert("Try Again ;)");

    captionMakerEn();
  }
}
submitBtn.addEventListener("click", validationEn);
reloadBtn.addEventListener("click", captionMakerEn);
