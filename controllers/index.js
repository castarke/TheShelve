const router = require('express').Router();
const homepageRoute = require('./homepage-route')
const apiRoutes = require('./api');
const movieRoutes = require('./movie-route');

router.use('/movie', movieRoutes);
router.use('/api', apiRoutes);
router.use('/', homepageRoute);


module.exports = router;