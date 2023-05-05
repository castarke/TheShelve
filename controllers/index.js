const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./movieRoutes');

router.use('/', movieRoutes);
router.use('/api', apiRoutes);

module.exports = router;