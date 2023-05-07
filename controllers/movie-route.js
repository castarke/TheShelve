const router = require('express').Router();
const { format } = require('path');
const { Movie } = require('../models');



  router.get("/movie", async (req, res) => {
    try {
      const movies = await Movie.findAll();
        res.render("movie", { movies });
    } catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      };
    }),


  router.get("/movie/:id", async (req, res) => {
    try{
      const movieId = req.params.id;
      const movie = await Movie.findByPk(movieId);
          if (!movie) {
            res.status(404).send("Movie not found");
          } else {
            res.render("movieDetails", { movie });
          }
        }
      catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
  });

 router.post("/movie", async (req, res) => {
  try{   
     const { title, genre, format, watched, img, description, rating } = req.body;
     
     await Movie.create({ title, genre, format, watched, img, description, rating })
      res.redirect("/movies");

  } catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
    });
// 
  module.exports = router;
