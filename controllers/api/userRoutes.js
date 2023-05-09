// This is the authentication router, which contains three endpoints related to user authentication: login, signup, and logout.
// The 'express' module is imported to create an instance of the router.
const router = require("express").Router();

// The 'User' model is imported from the 'models' directory to interact with the 'users' table in the database.
const { User } = require("../../models");

// The '/login' endpoint listens to POST requests, and checks if the user email exists in the database and if the password is correct.
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      throw new Error("User Not Found");
    }
    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      throw new Error("Incorrect Password");
    }
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// The '/signup' endpoint listens to POST requests, creates a new user with the provided information, and saves the user's session.
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const sigunupUser = await User.create({
      name,
      email,
      password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(sigunupUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// The '/logout' endpoint listens to POST requests, and destroys the user's session.
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// The router is exported for use in other files.
module.exports = router;
