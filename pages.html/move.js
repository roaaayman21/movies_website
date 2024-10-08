// api_key
const apiKey = "&api_key=c13b7e0f24d323f63766ae675594456d";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
// Movies api-url
const path = "/movie/now_playing?";
const apiUrl = url + path + apiKey;

const main = document.getElementById("main");

getMovies(apiUrl);
function getMovies(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.results);
      showMovie(data.results);
    });
}

function showMovie(data) {
  main.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `<img src="${imgPath + poster_path}" alt="Move" />
        <h4 id="moveName">${title}</h4>`;
  ;

    main.appendChild(movieElement);
  });
}
