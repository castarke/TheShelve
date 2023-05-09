// Importing the Express module and creating a new router instance
const router = require("express").Router();

// Importing the Movie model from the models folder
const { Movie } = require("../models");

// Importing the withAuth middleware function from the utils/auth.js file
const withAuth = require("../utils/auth");

// A GET route that renders the user's saved movies on the dashboard page
router.get("/", withAuth, async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: [
        "id",
        "title",
        "genre",
        "format",
        "watched",
        "img",
        "description",
        "rating",
      ],
    });
    const movie = movieData.map((singleMovie) =>
      singleMovie.get({ plain: true })
    );
    console.log(post);
    res.render("dashboard", {
      movie,
      login: req.session.login,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// A GET route that renders a form to edit an existing movie
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      include: [
        {
          model: Movie,
          attributes: ["title"],
        },
      ],
    });
    const movie = movieData.get({ plain: true });

    res.render("edit-movie", {
      ...movie,
      login: req.session.login,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// A GET route that renders a form to create a new movie
router.get("/new", withAuth, (req, res) => {
  res.render("new-movie");
});

// Exporting the router for use in other parts of the application
module.exports = router;
