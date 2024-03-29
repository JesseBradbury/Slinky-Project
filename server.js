// This will be the starting point for our app.

const path = require("path")
const express = require("express")
const session = require("express-session")
const exphbs = require("express-handlebars")
const routes = require("./controllers")
const helpers = require("./utils/helpers")

// require statements for sequelize
const sequelize = require("./config/connection")
const SequelizeStore = require("connect-session-sequelize")(session.Store)

// require statements for express
const app = express()
const PORT = process.env.PORT || 3001

// handlebars
const hbs = exphbs.create({ helpers })

// Express sessions
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

app.use(session(sess))

app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

// express server setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use('/assets', express.static('assets'));

app.use(routes)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"))
})
