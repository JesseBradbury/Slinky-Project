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
router.use('/spots', spotRoutes);
router.use('/waves', waveRoutes);
