const router = require('express').Router();
const { Movie } = require('../models');
const withAuth = require('../utils/auth');
 
router.get('/',  withAuth, async (req, res) => {
    try{ 
        const movieData = await Movie.findAll({
            where: {
                user_id: req.session.user_id
            },
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
        });
        const movie = movieData.map((singleMovie) =>
        singleMovie.get({plain: true}));
        console.log(post)
        res.render('dashboard',{
            movie, 
            login: req.session.login
        })
    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/edit/:id', withAuth, async (req,res)=>{
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
            login: req.session.login
        });
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/new', withAuth, (req, res) => {
res.render('new-movie');
}
)

module.exports = router;