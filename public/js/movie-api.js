const searchInput = document.getElementById('search-bar');
const searchButton = document.getElementById('zipForm');
let results = document.getElementById('results');

async function renderResults(movie) {
  if(!results){
    results = document.createElement('div')
  }
  // Clear previous search results
  results.innerHTML = "";
  // Create DOM elements for each movie property and append to results
  const movieTitle = document.createElement("h2");
  movieTitle.textContent = movie.Title;
  results.appendChild(movieTitle);

  const moviePoster = document.createElement("img");
  moviePoster.src = movie.Poster;
  results.appendChild(moviePoster);

  const moviePlot = document.createElement("h3");
  moviePlot.textContent = movie.Plot;
  results.appendChild(moviePlot);

  const movieRating = document.createElement("h3");
  movieRating.textContent = movie.imdbRating;
  results.appendChild(movieRating);

  const movieGenre = document.createElement('h3');
  movieGenre.textContent = movie.Genre
  results.appendChild(movieGenre)
}
    
async function addMovie(movie) {
  try {
    const newMovie = {
      title: movie.Title,
      genre: movie.Genre,
      format: "",
      watched: false,
      img: movie.Poster,
      description: movie.Plot,
      rating: movie.imdbRating
  }
  const createdMovie = await Movie.create(newMovie);
  renderMovie(createdMovie)
}catch (err) {
  console.log(err)
}}

async function searchMovie() {
  try {
    const userInput = searchInput.value;

    // const movie = await fetchMovie(userInput, apiKey)
    console.log('userInput from movie-api', userInput)
    const foundMovie = await fetch('/movie/searchOMDB:', {
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          userInput
        })
      })
    const movie = await foundMovie.json()
    renderResults(movie);
  } catch (error) {
    console.log(error)
  }
};

// const saveBtn = document.getElementById('saveBtn')
//   saveBtn.addEventListener('click',()=>{
//   // const addMovieBtn = document.createElement('button');
//   // addMovieBtn.textContent = `Add ${movie.Title} to database`;
//   // addMovieBtn.addEventListener('click', ()=> {
//     addMovie(movieData);
//   });

searchButton.addEventListener('submit', (event)=> {
  event.preventDefault()
  window.location.replace('/movie/searchOMDB/'+searchInput.value)
});
