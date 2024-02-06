// This will use sequilize to seed our db with basic info for testing. 

const sequelize = require('../config/connection');
// Brings in the user model
const { User } = require ('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};

seedDatabase();