// Importing Sequelize module
const Sequelize = require("sequelize");

// Importing dotenv module and loading environment variables
require("dotenv").config();

let sequelize;

// Checking if JAWSDB_URL environment variable exists
if (process.env.JAWSDB_URL) {
  // If JAWSDB_URL exists, creating a new Sequelize instance using that URL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If JAWSDB_URL doesn't exist, creating a new Sequelize instance using the local database credentials
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

// Exporting the Sequelize instance
module.exports = sequelize;
