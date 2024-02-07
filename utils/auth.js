// Taken from 23- Needs to be reworked.

const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login")
  } else {
    next()
  }
}

module.exports = withAuth
