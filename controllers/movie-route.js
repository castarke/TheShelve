const router = require('express').Router();
const { format } = require('path');
const { Movie } = require('../models');
const withAuth = require('../utils/auth');
const apiKey = process.env.OMDB_API_KEY;



  router.get("/", async (req, res) => {
    try {
      const movies = await Movie.findAll();
        res.render("movie", {movies});
    } catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      };
    }),

  router.get("/:id", async (req, res) => {
    try {
      const movieId = req.params.id;
      const movie = await Movie.findByPk(movieId);
      movie.get({ plain: true });
      // If no movie was found, send a 404 response
      if (!movie) {
        res.status(404).send("Movie not found");
      } else {
        const movieData = movie.dataValues;
        console.log(movieData);
        // Render the 'movie' view and pass in the retrieved movie as data
        res.render("movie", { movieData });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  });

// Route for creating a new movie
router.post("/newMovie", async (req, res) => {
  try {
    // Extract data from the request body
    const { title, genre, format, watched, img, description, rating, user_id } =
      req.body;

    // Create a new movie with the extracted data
    await Movie.create({
      title,
      genre,
      format,
      watched,
      img,
      description,
      rating,
    });
        // Redirect to the '/movies' route
        res.redirect("/movies");
      } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
    });
    
    router.get("/searchOMDB/:movieTitle", withAuth, async (req, res) => {
      try {
          const userInput = req.params.movieTitle
          console.log('userInput from movieroute',userInput)
          const foundMovieFromDb = await Movie.findOne({
              where: {title: userInput}
            })
            if(foundMovieFromDb) {
              res.render('movie', foundMovieFromDb)
            }
        const returnedSearch = await fetch(`https://www.omdbapi.com/?t=${userInput}&apikey=${apiKey}`);

        const movieData = await returnedSearch.json();
        // console.log(searchResults)
        // console.log('Return Search', returnedSearch)
        // return searchResults;
        console.log('movieData', movieData);
        res.render('movie',{movieData, loggedIn:req.session.loggedIn})
        // res.json(searchResults)
      } catch (error) {
        console.log(error);
      }
    });

// Export the router
module.exports = router;

