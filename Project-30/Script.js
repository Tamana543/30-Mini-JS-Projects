const body = document.querySelector("body"),
  inputEl = document.querySelector("#search"),
  submitBtn = document.querySelector(".submit"),
  boxContainers = document.querySelector(".display"),
  movieImg = document.querySelector("#movieImage"),
  nameEl = document.querySelector(".name"),
  descriptionEl = document.querySelector(".description"),
  dateEl = document.querySelector(".date");

async function UrlGenerator(MainUrl) {
  try {
    const url = await fetch(MainUrl);
    const data = await url.json();
    dataArray = data.results;
    return dataArray;
  } catch (error) {
    console.error(error);
  }
}
let dataArray = [];
function UiGenerator(event) {
  event.preventDefault();
  const APIKey = `58662704857e9a3d73c2c2c365191b0d`;
  const keyword = inputEl.value;
  const data = UrlGenerator(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );

  console.log(data);

  nameEl.textContent = data.original_title;
  descriptionEl.textContent = data.overview;
  console.log(data.original_title, data.overview);
}
submitBtn.addEventListener("click", UiGenerator);
