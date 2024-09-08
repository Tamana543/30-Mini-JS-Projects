const passwordInput = document.querySelector(".password_label-input"),
  copyIcon = document.querySelector(".icon"),
  upperCase = document.getElementById("uppercase"),
  lowerCase = document.getElementById("lowercase"),
  number = document.getElementById("number"),
  symbol = document.getElementById("symbol");
function copyEn() {
  const passwordInputEl = passwordInput.textContent;
  navigator.clipboard.writeText(`${passwordInputEl}`);
  alert("Text Copied");
}
copyIcon.addEventListener("click", copyEn);
//
