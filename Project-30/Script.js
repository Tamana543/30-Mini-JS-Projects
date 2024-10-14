const body = document.querySelector("body"),
  inputEl = document.querySelector("#search"),
  submitBtn = document.querySelector(".submit"),
  boxContainers = document.querySelector(".display"),
  movieImg = document.querySelector(".movieImage"),
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

  if (keyword) {
    const data = UrlGenerator(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&page=1&include_adult=false&query=${keyword}`
    );
    for (let i = 0; i > data.length; i++) {
      console.log(data);
      const div = document.createElement("div");
      div.classList.add("display");
      const img = document.createElement("img");
      img.classList.add("movieImage");
      const div_2 = document.createElement("div");
      div_2.classList.add("display_text-box");
      const name = document.createElement("p");
      name.classList.add("name");
      const description = document.createElement("p");
      name.classList.add("description");
      const date = document.createElement("p");
      name.classList.add("date");
      // nameEl.textContent = data[i].original_title;
      // descriptionEl.textContent = data[i].overview;
      // console.log(data[i].original_title, data[i].overview);
    }
  } else {
    alert("Fill the input ;)");
  }
}
submitBtn.addEventListener("click", UiGenerator);
