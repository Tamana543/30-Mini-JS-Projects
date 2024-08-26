const input = document.getElementById("text_input"),
  counter = document.getElementById("counter");
let curText = 0;

document.addEventListener("keypress", (event) => {
  if (event.key) curText++;
  else curText;
  console.log(event.key);
  counter.textContent = +curText;
});
