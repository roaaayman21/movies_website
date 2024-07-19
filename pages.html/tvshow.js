// api_key
const url = "https://api.themoviedb.org/3";
const apiKey = "&api_key=c13b7e0f24d323f63766ae675594456d";
const imgPath = "https://image.tmdb.org/t/p/w500/";
// tvshow api-url
const path ="/tv/top_rated?";
const apiUrl = url + path + apiKey;

const main = document.getElementById("main");


gettvShow(apiUrl);
function gettvShow(url) {
  
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.results);
      showtvShow(data.results);
    });
}

function showtvShow(data) {
  main.innerHTML = "";
  data.forEach((tvShow) => {
    const { original_language, name ,original_name ,poster_path , first_air_date ,popularity ,origin_country} = tvShow;
    const tvShowElement = document.createElement("div");
    tvShowElement.classList.add("movie");
    tvShowElement.innerHTML = `<img class='imgtvShow' src="${imgPath + poster_path}" alt="Move" />
        <h4 id="moveName" >${name}</h4>
        </div>`
      ;
    main.appendChild(tvShowElement);
  });
}






