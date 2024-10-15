const body = document.querySelector("body"),
  inputEl = document.querySelector("#search"),
  submitBtn = document.querySelector(".submit"),
  boxContainers = document.querySelector(".display"),
  movieImg = document.querySelector(".movieImage"),
  nameEl = document.querySelector(".name"),
  descriptionEl = document.querySelector(".description"),
  dateEl = document.querySelector(".date");

async function UrlGenerator() {
  try {
    if (keyword) {
      const APIKey = `58662704857e9a3d73c2c2c365191b0d`;
      const keyword = inputEl.value;
      const url = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&page=1&include_adult=false&query=${keyword}`
      );
      const data = await url.json();
      dataArray = data.results;
      UiGenerator(dataArray);
    } else {
      alert("Fill the input ;)");
    }
  } catch (error) {
    console.error(error);
  }
}
let dataArray = [];
function UiGenerator(dataEl) {
  const data = dataEl;
  console.log(data);
  for (let i = 0; i > data.length; i++) {
    console.log(data);
    const div = document.createElement("div");
    div.classList.add("display");
    const img = document.createElement("img");
    img.classList.add("movieImage");
    img.src =
      data.backdrop_path === null
        ? `Capture 3.PNG`
        : `https://image.tmdb.org/t/p/w500${data[i].backdrop_path}`;

    const div_2 = document.createElement("div");
    div_2.classList.add("display_text-box");
    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = data[i].original_title;
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = data[i].overview;
    const date = document.createElement("p");
    date.classList.add("date");
    date.textContent = data[i].release_date;
    boxContainers.appendChild(div);
    div.appendChild(img);
    div.appendChild(div_2);
    div_2.appendChild(name);
    div_2.appendChild(description);
    div_2.appendChild(data);
    // nameEl.textContent = data[i].original_title;
    // descriptionEl.textContent = data[i].overview;
    // console.log(data[i].original_title, data[i].overview);
  }
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  UrlGenerator();
});
