// Import required modules
const router = require("express").Router();
const { format } = require("path");
const { Movie } = require("../models");

// Route for rendering all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.findAll();
    // Render the 'movie' view and pass in the retrieved movies as data
    res.render("movie", { movies });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
}),
  // Route for rendering a single movie by ID
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

// Export the router
module.exports = router;
