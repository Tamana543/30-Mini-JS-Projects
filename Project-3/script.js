const input = document.getElementById("text_input"),
  counter = document.getElementById("counter");
let curText = 0;

input.addEventListener("keypress", (event) => {
  let data = [...input.value];
  const key = event.key;
  if (key) {
    curText = data.length;
  } else curText;
  counter.textContent = curText;
});
