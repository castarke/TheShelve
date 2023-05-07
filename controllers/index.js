const router = require('express').Router();
const homepageRoute = require('./homepage-route')
const dashboardRoutes = require('./dashboard-route')
const apiRoutes = require('./api');
const movieRoutes = require('./movie-route');

router.use('/movie', movieRoutes);
router.use('/api', apiRoutes);
router.use('/', homepageRoute);
router.use('/dashboard', dashboardRoutes);

module.exports = router;