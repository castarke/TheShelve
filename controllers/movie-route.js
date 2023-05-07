const router = require('express').Router();
const { format } = require('path');
const { Movie } = require('../models');



  router.get("/", async (req, res) => {
    try {
      const movies = await Movie.findAll();
        res.render("movie", { movies });
    } catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      };
    }),


  router.get("/:id", async (req, res) => {
    try{
      const movieId = req.params.id;
      const movie = await Movie.findByPk(movieId);
      movie.get({plain:true})
          if (!movie) {
            res.status(404).send("Movie not found");
          } else {
            const movieData =movie.dataValues
            console.log(movieData)
            res.render("movie", {movieData});
          }
        }
      catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
  });

 router.post("/newMovie", async (req, res) => {
  try{   
     const { title, genre, format, watched, img, description, rating, user_id } = req.body;
     
     await Movie.create({ title, genre, format, watched, img, description, rating })
      res.redirect("/movies");

  } catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
    });
// 
  module.exports = router;
