const passwordInput = document.querySelector(".password_label-input"),
  copyIcon = document.querySelector(".icon"),
  upperCase = document.getElementById("uppercase").checked,
  lowerCase = document.getElementById("lowercase").checked,
  number = document.getElementById("number").checked,
  symbol = document.getElementById("symbol").checked,
  submitBtn = document.querySelector(".submit");
function copyEn() {
  const passwordInputEl = passwordInput.textContent;
  navigator.clipboard.writeText(`${passwordInputEl}`);
  alert("Text Copied");
}
function generatPassword() {
  let password = "";
  const passwordMain = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseEng = String(passwordMain).toUpperCase();

  const numberEn = "0 1 2 3 4 5 6 7 8 9";
  let outpot = "";

  if (upperCase) outpot += upperCaseEng;
  if (lowerCase) outpot += passwordMain;
  if (number) outpot += numberEn;
  if (symbol) outpot += "~!@#$%^&*()_-+=,'/?<>:;";
  for (let i = 0; i < 12; i++) {
    let randomEng = outpot[Math.floor(Math.random() * 12)];
    password += randomEng;
  }

  passwordInput.textContent = password;
}
copyIcon.addEventListener("click", copyEn);
//
submitBtn.addEventListener("click", generatPassword);
