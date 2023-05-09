
// // const movieData = require('../../seeds/movie')
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// const sharp = require('sharp')
// import { Model, DataTypes } from "sequelize";
// import sequelize from "../../config/connection";
const searchInput = document.getElementById('search-bar');
const searchButton = document.getElementById('zipForm');
let results = document.getElementById('results');
// require('dotenv').config();


async function renderResults(movie) {
  if(!results){
    results = document.createElement('div')
  }
  results.innerHTML = "";
console.log('made it')
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
  movieGenre.textContent = movie.Genre
  results.appendChild(movieGenre)


    renderMovie(results);
      // const addMovieBtn = document.createElement('button');
      // addMovieBtn.textContent = `Add ${movie.Title} to database`;
      // addMovieBtn.addEventListener('click', ()=> {
      //   addMovie(movie);
      // });
      // results.appendChild(addMovieBtn)
    }
    

// async function findMovie(title) {
//   try {
//     const movie = await Movie.findOne({
//       where: {title: title}
//     });
//     return movie
//   } catch (err) {
//     console.log(err)
//   }
// }

async function addMovie(movie) {
  try {
    const newMovie = {
      title: movie.Title,
      genre: movie.Genre,
      format: "",
      watched: "",
      img: movie.Poster,
      description: movie.Plot,
      rating: movie.imdbRating
  }
  const createdMovie = await Movie.create(newMovie);
  renderMovie(createdMovie)
}catch (err) {
  console.log(err)
}}

function renderMovie(movie) {
  const movieData = {
    title: movie.title,
    genre: movie.genre,
    format: movie.format,
    watched: movie.watched,
    img: movie.img,
    description: movie.description,
    rating: movie.rating
  };
  // const template = Handlebars.compile(document.querySelector('#movie').innerHTML);
  // console.log('movieData', movieData)
  // console.log('template',template)
  // const html = template(movieData);
  // results.innerHTML = html
  };

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

// async function fetchMovie(userInput, apiKey) {
//   console.log('made it')
//   try {
//     const returnedSearch = await fetch(`https://www.omdbapi.com/?t=${userInput}&apikey=${apiKey}`);
// debugger
//     const searchResults = await returnedSearch.json();
//     console.log(searchResults)
//     console.log('Return Search', returnedSearch)
//     return searchResults;
  
//   } catch (error) {
//     console.log(error);
//   }
// };

searchButton.addEventListener('submit', (event)=> {
  event.preventDefault()
  window.location.replace('/movie/searchOMDB/'+searchInput.value)
  // searchMovie()
});

