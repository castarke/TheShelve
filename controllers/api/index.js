// Importing the Express module and creating a new router instance
const router = require("express").Router();

// Importing the userRoutes module, which contains routes related to user management
const userRoutes = require("./userRoutes");

// Mounting the userRoutes module on the '/user' route
router.use("/user", userRoutes);

// Exporting the router for use in other parts of the application
module.exports = router;
