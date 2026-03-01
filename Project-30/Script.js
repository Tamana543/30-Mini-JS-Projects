const body = document.querySelector("body"),
  inputEl = document.querySelector("#search"),
  submitBtn = document.querySelector(".submit"),
  boxContainers = document.querySelector(".results"),
  movieImg = document.querySelector(".movieImage"),
  nameEl = document.querySelector(".name"),
  descriptionEl = document.querySelector(".description"),
  dateEl = document.querySelector(".date");

async function UrlGenerator() {
  try {
    const keyword = inputEl.value;
    if (keyword) {
      const APIKey = `58662704857e9a3d73c2c2c365191b0d`;
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&page=1&include_adult=false&query=${keyword}`
      );
      const data = await response.json();

const moviesWithImages = data.results.filter(
movie => movie.poster_path && movie.overview
); 

UiGenerator(moviesWithImages);

    } else {
      alert("Fill the input ;)");
    }
  } catch (error) {
    console.error(error);
  }
}
let dataArray = [];

function UiGenerator(data) {
  boxContainers.innerHTML =""

  for (let i = 0; i < data.length; i++) {

    const div = document.createElement("div");
   div.classList.add("movie-card");
    const img = document.createElement("img");
    img.classList.add("movieImage");
    img.src = `https://image.tmdb.org/t/p/w500${data[i].poster_path}`;
    // img.src =
    //   data[i].poster_path === null
    //     ? `https://image.tmdb.org/t/p/w500${poster}`
    //     : `https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png`;
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

    div.appendChild(img);
    div.appendChild(div_2);
    div_2.appendChild(name);
    div_2.appendChild(description);

    boxContainers.appendChild(div)

  }
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  UrlGenerator();
});
