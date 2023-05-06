const router = require('express').Router();

<<<<<<< HEAD
router.use('/user', userRoutes);
=======
const apiRoutes = require('./api');
const homeRoutes = require('./movieRoutes');

router.use('/', movieRoutes);
router.use('/api', apiRoutes);
>>>>>>> main

module.exports = router;