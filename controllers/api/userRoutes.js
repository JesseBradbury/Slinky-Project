const router = require("express").Router()
const { User } = require("../../models")

// Route that creates a new user with the post request to the api/users route.
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password
    }, {
      individualHooks: true,
      returning: true
    })
    // This signs the user in after they create a user.
    req.session.save(() => {
      req.session.user_id = userData.id
      req.session.logged_in = true

      res.status(200).json({ user: userData, message: "You are now logged in!" })
    })
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

// This is the route that checks the user sign in email and password with the user table in the slinkyworld_db.
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } })

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, try again" })
      return
    }

    const validPassword = await userData.checkPassword(req.body.password)

<<<<<<< HEAD
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password, try again" })
      return
=======
// This is the route that checks the user sign in email and password with the user table in the slinkyworld_db. 
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { user_name: req.body.username } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect password, try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' })
        });

    } catch (err) {
        res.status(400).json(err);
        console.log(err);
>>>>>>> 66e425a3ee9292259a1fa462d16ba553cc314584
    }

    req.session.save(() => {
      req.session.user_id = userData.id
      req.session.logged_in = true

      res.json({ user: userData, message: "You are now logged in!" })
    })
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

// This is the logout route.
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})

module.exports = router
