const quoteContainer = document.querySelector(".main_text"),
  author = document.querySelector(".autor_name"),
  btn = document.querySelector(".newBtn");

async function get_quote_of_the_day() {
  const AJAX = await fetch(
    "https://programming-quotesapi.vercel.app/api/random"
  );
  const data = await AJAX.json();
  quoteContainer.textContent = data.quote;
  author.textContent = data.author;
  console.log(data);
}
btn.addEventListener("click", get_quote_of_the_day);
