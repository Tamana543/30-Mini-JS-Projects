const quoteContainer = document.querySelector(".main_text"),
  author = document.querySelector(".autor_name"),
  btn = document.querySelector(".newBtn"),
  copyBtn = document.querySelector(".clipboard_btn");

async function get_quote_of_the_day() {
  const AJAX = await fetch(
    ` https://echoes.soferity.com/api/quotes`
  );
  const data = await AJAX.json();
  console.log(data.data[0].quote);
  quoteContainer.textContent = data.data[0].quote;
  author.textContent = data.data[0].author;
}
btn.addEventListener("click", get_quote_of_the_day);
// copy the quote in clipboard
copyBtn.addEventListener("click", () => {
  let text = quoteContainer.textContent;
  let authorName = author.textContent;
  navigator.clipboard.writeText(`${text}\n${authorName}`);
  alert("Text Copied");
});
