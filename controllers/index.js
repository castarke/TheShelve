const router = require('express').Router();

const apiRoutes = require('./api');
const movieRoutes = require('./movieController');

router.use('/', movieRoutes);
router.use('/api', apiRoutes);

module.exports = router;