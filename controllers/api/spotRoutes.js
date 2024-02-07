const router = require("express").Router()
const { Spot, User } = require("../../models")

router.post("/", async (req, res) => {
  try {
    const spotData = await Spot.create({
      spot_Name: req.body.spot_name,
      steps: req.body.steps,
      city: req.body.city,
      state: req.body.state,
      location: req.body.location,
      description: req.body.description,
      user_id: req.session.user_id
    })
    res.status(200).json(spotData)
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

router.get("/", async (req, res) => {
  try {
    const dbSpotData = await Spot.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "user_name"]
        }
      ]
    })

    const spots = dbSpotData.map((spot) => {

    })
  } catch {

  }
})
