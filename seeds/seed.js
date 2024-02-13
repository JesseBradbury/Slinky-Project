

const sequelize = require('../config/connection');
// Brings in the user model
const { User, Spot, Wave } = require('../models');

const userData = require('./userData.json');
const spotData = require('./spotData.json');
const waveData = require('./waveData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await Spot.bulkCreate(spotData, {
        individualHooks: true,
        returning: true,
    });
    await Wave.bulkCreate(waveData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};

seedDatabase();

