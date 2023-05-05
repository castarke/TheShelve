
const movieData = require('../../seeds/movie')
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const results = document.getElementById('results');
const apiKey = process.env.OMDB_API_KEY;

function renderResults(movie) {
  results.innerHTML = '';

  const movieTitle = document.createElement('h2');
  movieTitle.textContent = movie.Title;
  results.appendChild(movieTitle);

  const moviePoster = document.createElement('img');
  moviePoster.src = movie.Poster;
  results.appendChild(moviePoster);

  const moviePlot = document.createElement('h3');
  moviePlot.textContent = movie.Plot;
  results.appendChild(moviePlot);

  const movieRating = document.createElement('h3');
  movieRating.textContent = movie.imdbRating;
  results.appendChild(movieRating)

  const movieGenre = document.createElement('h3');
  movieGenre.textContent =movie.genre
  results.appendChild(movieGenre) 

  const newMovie = {
    title: movie.Title,
    genre: movie.Genre,
    format:"",
    watched:"",
    img:movie.Poster,
    description:movie.Plot,
    rating:movie.Rating
  };

  // need to figure out how to send this data to the movie database when entered, ORM?

};

async function searchMovie() {
try {
  const userInput = searchInput.value;
  const movie = await searchFor(userInput, apiKey)
      renderResults(movie);
} catch (error){
console.log(error)
}
};

async function fetchMovie(userInput, apiKey) {
  try {
    const returnedSearch = await fetch(`https://www.omdbapi.com/?t=${userInput}&apikey=${apiKey}`);

    const searchResults = await returnedSearch.json();
    return searchResults;

  } catch (error) {
    console.log(error);
  }
};

searchButton.addEventListener('click', searchMovie);

