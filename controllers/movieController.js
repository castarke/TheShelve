const { Movie } = require("../config/connection");

module.exports = {
  getAllMovies: (req, res) => {
    Movie.findAll()
      .then((movies) => {
        res.render("movies", { movies });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
      });
  },

  getOneMovie: (req, res) => {
    const movieId = req.params.id;

    Movie.findByPk(movieId)
      .then((movie) => {
        if (!movie) {
          res.status(404).send("Movie not found");
        } else {
          res.render("movieDetails", { movie });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
      });
  },

  addMovie: (req, res) => {
    const { title, format, genre, watched } = req.body;

    Movie.create({ title, format, genre, watched })
      .then(() => {
        res.redirect("/movies");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
      });
  },
};
