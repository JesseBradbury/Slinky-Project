// First router file\

// THis is the index

// TODO Set up home routes

const router = require("express").Router()

const apiRoutes = require("./api")
const homeRoutes = require("./homeRoutes")

router.use("/", homeRoutes)
router.use("/api", apiRoutes)

module.exports = router
