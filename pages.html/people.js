// api_key
const apiKey = "&api_key=c13b7e0f24d323f63766ae675594456d";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
// People api-url
const path = "/person/popular?";
const apiUrl = url + path + apiKey;


const main = document.getElementById("main");

getPeople(apiUrl);
function getPeople(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.results);
      showpeople(data.results);
    });
}

function showpeople(data) {
  main.innerHTML = "";
  data.forEach((people) => {
    const { name , profile_path  } = people;
    const peopleElement = document.createElement("div");
    peopleElement.classList.add("movie");
    peopleElement.innerHTML = `<img class='imgpeople' src="${imgPath + profile_path}" alt="Move" />
        <h4 id="name" ">${name}</h4> `;
    main.appendChild(peopleElement);
  });
}
