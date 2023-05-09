// Import the `express` module and create a router object
const router = require("express").Router();

// Import modules for handling HTTP requests for different endpoints
const homepageRoute = require("./homepage-route");
const dashboardRoutes = require("./dashboard-route");
const apiRoutes = require("./api");
const movieRoutes = require("./movie-route");

// Use the imported modules to handle requests for different endpoints
router.use("/movie", movieRoutes); // handles requests to '/movie'
router.use("/api", apiRoutes); // handles requests to '/api'
router.use("/", homepageRoute); // handles requests to home
router.use("/dashboard", dashboardRoutes); // handles requests to '/dashboard'

// Export the router object for use in other parts of the application
module.exports = router;
