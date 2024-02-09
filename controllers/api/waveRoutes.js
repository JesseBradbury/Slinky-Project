const router = require('express').Router();
const { Wave, Spot, User} = require('../../models');

router.post('/:spot_id', async (req,res) => {
    try {
        const spotIdFromParams = req.params.spot_id;
        console.log('Spot ID from params:', spotIdFromParams);

        const waveData = await Wave.create({
            spot_id: spotIdFromParams,
            steps: req.body.steps,
            time: req.body.time,
            comment: req.body.comment,
            user_id: req.session.user_id,
        });
        res.status(200).json(waveData)
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// Get waves for a speciffic spot. 
router.get('/spots/:spot_id/waves', async (req, res) => {
    try {
        const spotId = req.params.spot_id;

        // Find the waves associated with the spot_id
        const waves = await Wave.findAll({
            where: { spot_id: spotId },
            include: [
                {
                    model: User,
                    attributes: ['id', 'user_name'],
                },
            ],
        });

        res.status(200).json(waves);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const dbWaveData = await Wave.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'user_name'],
                },
            ],
        });

        const waves = dbWaveData.map((wave) => wave.get({ plain: true })
        );
        res.json(waves);
        // res.render('places', {
        //     spots,
        //     loggedIn: req.session.loggedIn,
        // });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;