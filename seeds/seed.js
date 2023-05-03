const seedUsers = require('./user');
const seedMovie = require('./movie');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({force:true});
    await seedUsers();
    await seedMovie();
    process.exit(0);
}

seedAll();