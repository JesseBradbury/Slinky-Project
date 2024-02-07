const router = require('express').Router();
const { Wave, Spot, User } = require('../../models');

router.post('/', async (req,res) => {
    try {
        const waveData = await Spot.create({
            spot_id: req.body.spot_id,
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
