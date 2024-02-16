const router = require("express").Router()
const { User, Spot, Wave } = require("../models")
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
router.get("/profile", withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login")
    return
  }
  const userId = req.session.user_id;
  console.log(userId);
  try {
    const userData = await User.findByPk(userId, {
      include: [
        {
          model: Spot,
          attributes: ['id', 'spot_name', 'steps'],
        },
      ],
    });

    if (!userData) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    console.log(userData)


    console.log(userData.get({ plain: true }));
    res.render("profile", { userData: userData.get({ plain: true }) });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// should we have a route that allows people to search for locations?
router.get("/search", withAuth, (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login")
    return
  }

  res.render("search")
})

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

    const spots = dbSpotData.map((spot) => spot.get({ plain: true })
    );

    res.render('spots', {
      spots,
      // loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/spots/:id', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login")
    return
  }

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
      // user: dbSpotData.User.get({ plain: true }),
      // waves: dbSpotData.Waves.map((wave) => wave.get({ plain: true }))
      user: dbSpotData.user ? dbSpotData.user.get({ plain: true }) : null,
      waves: dbSpotData.waves.map((wave) => wave.get({ plain: true })),
    };

    console.log('spot:', spot);

    res.render('spotDetails', { spot });

  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(err)
  }
});

router.get('/createspot', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login")
    return
  }

  try {
    res.render('spotCreate')
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(err)
  }
})

module.exports = router
