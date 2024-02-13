const router = require("express").Router();
const { User, Spot, Wave } = require("../models");
const withAuth = require("../utils/auth");

// This is the get route for the homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// This is the get route for the login page
router.get("/login", (req, res) => {
  // Redirect if the user is already signed in.
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// This is the get route for the signup page
router.get("/signup", (req, res) => {
  // Redirect if the user is already signed in.
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

// This will be the router for the users profile.
router.get("/profile", withAuth, (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("profile");
});

// This route renders the homepage with a "history" button
router.get("/homepage", async (req, res) => {
  try {
    res.render("homepage", { showHistoryButton: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// should we have a route that allows people to search for locations?
router.get("/search", withAuth, (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("search");
});

router.get('/spots', async (req, res) => {
  try {
    const dbSpotData = await Spot.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'user_name'],
        },
      ],
    });

    const spots = dbSpotData.map((spot) => spot.get({ plain: true }));

    res.render('spots', {
      spots,
      // loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/spots/:id', async (req, res) => {
  try {
    const spotId = req.params.id;

    const dbSpotData = await Spot.findByPk(spotId, {
      include: [
        {
          model: User,
          attributes: ['id', 'user_name'],
        },
        {
          model: Wave,
          attributes: ['id', 'steps', 'time', 'comment'],
          include: [
            {
              model: User,
              attributes: ['id', 'user_name'],
            },
          ]
        }
      ],
    });

    if (!dbSpotData) {
      res.status(404).json({ error: 'Spot not found' });
      return;
    }

    console.log('dbSpotData:', dbSpotData);

    const spot = {
      ...dbSpotData.get({ plain: true }),
      user: dbSpotData.User.get({ plain: true }),
      waves: dbSpotData.waves.map((wave) => wave.get({ plain: true }))
    };

    console.log('spot:', spot);

    res.render('spotDetails', { spot });

  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(err);
  }
});

module.exports = router;
