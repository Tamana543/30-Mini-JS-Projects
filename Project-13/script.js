const passwordInput = document.querySelector(".password_label-input"),
  copyIcon = document.querySelector(".icon"),
  upperCase = document.getElementById("uppercase"),
  lowerCase = document.getElementById("lowercase"),
  number = document.getElementById("number"),
  symbol = document.getElementById("symbol"),
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
  let outpot = [];

  if (
    !upperCase.checked &&
    !lowerCase.checked &&
    !number.checked &&
    !symbol.checked
  ) {
    outpot = "~!@#$%^43*(SA_-+=fv'/?<>:;";
    // console.log(`First`);
  }

  symbol.checked ? (outpot += "~!@#$%^&*()_-+=,'/?<>:;") : " ";
  upperCase.checked ? (outpot += upperCaseEng) : " ";
  lowerCase.checked ? (outpot += passwordMain) : " ";
  number.checked ? (outpot += numberEn) : " ";
  // console.log(upperCase);
  for (let i = 0; i < 12; i++) {
    let randomEng = outpot[Math.floor(Math.random() * 12)];
    password += randomEng;
  }

  passwordInput.textContent = password;
}
copyIcon.addEventListener("click", copyEn);
//
submitBtn.addEventListener("click", generatPassword);
