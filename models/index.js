// Import the User and Movie models
const User = require("./User");
const Movie = require("./Movie");

// Define the association between User and Movie models
// A user can have many movies, so the User model has a 'hasMany' relationship with the Movie model
User.hasMany(Movie, {
  foreignKey: "user_id", // Define the foreign key as 'user_id' to link the User and Movie models
  onDelete: "CASCADE", // If a user is deleted, cascade delete all their associated movies
});

// Define the association between Movie and User models
// A movie belongs to a user, so the Movie model has a 'belongsTo' relationship with the User model
Movie.belongsTo(User, {
  foreignKey: "user_id", // Define the foreign key as 'user_id' to link the Movie and User models
});

// Export both the User and Movie models
module.exports = { User, Movie };
