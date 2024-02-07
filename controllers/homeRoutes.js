const router = require("express").Router()
const { User } = require("../models")
const withAuth = require("../utils/auth")
// TODO: Add the withAuth util from example.

// This is the get route for / The homepage will render through handlebars.
router.get("/", async (req, res) => {
  try {
    res.render("homepage")
  } catch (err) {
    res.status(500).jason(err)
  }
})

// This is the get route for the login page
router.get("/login", (req, res) => {
  // Redirect if the user is already signed in.
  if (req.session.logged_in) {
    res.redirect("/")
    return
  }

  res.render("login")
})

// This is the get route for the signup page
router.get("/signup", (req, res) => {
  // Redirect if the user is already signed in.
  if (req.session.logged_in) {
    res.redirect("/")
    return
  }

  res.render("signup")
})

// This will be the router for the users profile.
router.get("/profile", withAuth, (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login")
    return
  }

  res.render("profile")
})

// should we have a route that allows people to search for locations?
router.get("/search", withAuth, (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login")
    return
  }

  res.render("search")
})

module.exports = router
