const router = require('express').Router();
const { Spot, Wave, User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const spotData = await Spot.create({
            spot_name: req.body.spot_name,
            steps: req.body.steps,
            city: req.body.city,
            state: req.body.state,
            location: req.body.location,
            description: req.body.description,
            user_id: req.session.user_id,
        });
        res.status(200).json(spotData)
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// get all spots
router.get('/', async (req, res) => {
    try {
        const dbSpotData = await Spot.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'user_name'],
                },
            ],
        });

        const spots = dbSpotData.map((spot) => spot.get({ plain: true })
        );

        res.render('places', {
            spots,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const dbSpotData = await Spot.findByPk(req.params.id, {
                include: [
                    {
                        model: User, Wave,
                        attributes: ['id', 'user_name', 'spot_id'],
                    },
                ],
            });

            const spots = dbSpotData.map((spot) => spot.get({ plain: true })
            );

            res.render('places', {
                spots,
                loggedIn: req.session.loggedIn,
            });

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

// get one spot, requires sign in

module.exports = router;