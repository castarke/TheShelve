const router = require('express').Router();
const { User } = require('../../models');


router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne(
        { where: { email: req.body.email } 
      })
      if (!userData) {
        throw new Error('User Not Found')
      }
      const validPassword = userData.checkPassword(req.body.password);
      if (!validPassword) {
        throw new Error('Incorrect Password')
      }
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

  router.post('/signup', async (req,res)=> {
    const {name, email, password} = req.body;
    try {
      const sigunupUser = await User.create({
        name, email, password
      });
      req.session.save(() => {
        req.session.loggedIn = true;

        res.status(200).json(sigunupUser);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err)
    }
  })

  router.post('/logout', (req, res) => {
    if ( req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;