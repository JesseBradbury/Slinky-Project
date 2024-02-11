
const express = require('express');
const router = express.Router();
const { Spot } = require('/Users/emilykline/bootcamp/homework/Slinky-Project/models/spot.js');

// GET homepage
router.get('/', async (req, res) => {
    try {
        // Fetch all spots data
        const dbSpotData = await Spot.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'user_name'],
                },
                {
                    model: Wave,
                    attributes: ['id', 'steps', 'time', 'comment'],
                    include: [
                        {
                            model: User,
                            attributes: ['id', 'user_name'],
                        },
                    ],
                },
            ],
        });

        // Render homepage template with spots data
        res.render('homepage', { spots: dbSpotData, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
