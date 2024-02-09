
const sequelize = require("./config/connection");
const { User, Wave, Spot } = require('./models')

async function main() {
    await sequelize.sync({ force: true });
    const tempUser = await User.create({
        "user_name": "Jesse",
        "email": "j@b.com",
        "password": "password12345"
    })

    const tempSpot = await Spot.create({
        spot_name: "My Spot",
        steps: 500,
        city: "AZ",
        state: "AZ",
        location: "Downtown",
        description: "Awesome Spot",
        user_id: tempUser.id
    })

    const tempWave = await Wave.create({
        spot_id: tempSpot.id,
        steps: 300,
        time: "now",
        comment: "Sweet Spot",
        user_id: tempUser.id
    })



    const findSpot = await Spot.findAll({
        include: Wave
    })

    console.log(JSON.stringify(findSpot, null, 2))
}

main();