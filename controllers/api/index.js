// Our first /api router.
// Could be getting users or slinkys or something.

const router = require("express").Router()
const userRoutes = require("./userRoutes")
const spotRoutes = require("./spotRoutes")
const waveRoutes = require("./waveRoutes")

<<<<<<< HEAD
router.use("/users", userRoutes)
router.use("/spots", spotRoutes)
router.use("/waves", waveRoutes)
=======
router.use('/users', userRoutes);
// router.use('/spots', spotRoutes);
// router.use('/waves', waveRoutes);
>>>>>>> 66e425a3ee9292259a1fa462d16ba553cc314584

module.exports = router
