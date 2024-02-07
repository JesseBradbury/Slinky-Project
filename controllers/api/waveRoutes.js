const router = require('express').Router();
const { Wave, Spot, User} = require('../../models');

router.post('/', async (req,res) => {
    try {
        const waveData = await Wave.create({
            spot_id: req.body.spot_id,
            steps: req.body.steps,
            time: req.body.time,
            comment: req.body.comment,
            user_id: req.body.user_id,
        });
        res.status(200).json(waveData)
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
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