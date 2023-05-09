// Import the necessary modules
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create the Movie model by extending the Sequelize Model class
class Movie extends Model {}

// Define the Movie model's fields and properties
Movie.init(
  {
    // Define the id field, which is an auto-incrementing integer primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // Define the title field, which is a required string
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the genre field, which is a required string
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the format field, which is an optional string
    format: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Define the watched field, which is an optional boolean with a default value of false
    // The trueValue and falseValue properties are not valid Sequelize properties, and will not affect the behavior of this field
    watched: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      trueValue: "Yes",
      falseValue: "No",
    },
    // Define the img field, which is an optional string
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Define the description field, which is an optional string
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Define the rating field, which is an optional decimal number
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    // Define the user_id field, which is an optional integer that links to the User model
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize, // Link to the database connection
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    underscored: true, // Use underscores instead of camelCase in field names
    modelName: "movie", // Set the model name to 'movie'
  }
);

// Export the Movie model
module.exports = Movie;
