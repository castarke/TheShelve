const router = require('express').Router();
const { Movie, User } = require('../models');

router.get('/', async (req, res) => {
    try{  
        if (!req.session.loggedIn) {
            res.redirect('/login');
            return
        }
        
        const movieData = await Movie.findAll({
            attributes:[
                'id',
                'title',
                'genre',
                'format',
                'watched',
                'img',
                'description',
                'rating'
            ],            
        }
        );

        const movie = movieData.map( singleMovie => singleMovie.get({plain: true}))

        res.render('homepage',{
            movie, 
            loggedIn: req.session.loggedIn
        })
    } catch(err){
        console.log('There was an Error')
        console.log(err)
        res.status(500).json(err)
    }
});

router.get('/movie/:id', async (req,res)=>{

    console.log(req.params.id)
    try{
        const movieData = await Movie.findByPk(req.params.id, {
            include: [
                {
                    model:Movie,
                    attributes: ['title'],
                }
            ]
        }
        )
        const movie = movieData.get({plain:true});

        res.render('edit-movie', {
            ...movie,
            loggedIn: req.session.loggedIn
        });
    } catch (err){
        res.status(500).json(err);
    }
});
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    const loggedIn = req.session.loggedIn
    res.render('login', loggedIn);
  });

  router.get('/signup', (req,res)=>{
    res.render('login');
  });

  module.exports = router;