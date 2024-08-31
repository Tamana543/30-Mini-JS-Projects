const quoteContainer = document.querySelector(".main_text"),
  author = document.querySelector(".autor_name"),
  btn = document.querySelector(".newBtn"),
  copyBtn = document.querySelector(".clipboard_btn");

async function get_quote_of_the_day() {
  const AJAX = await fetch(
    ` https://programming-quotesapi.vercel.app/api/random`
  );
  const data = await AJAX.json();
  console.log(data);
  quoteContainer.textContent = data.quote;
  author.textContent = data.author;
}
btn.addEventListener("click", get_quote_of_the_day);
// copy the quote in clipboard
copyBtn.addEventListener("click", () => {
  let text = quoteContainer.textContent;
  let authorName = author.textContent;
  navigator.clipboard.writeText(`${text}\n${authorName}`);
  alert("Text Copied");
});
