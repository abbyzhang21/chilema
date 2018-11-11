const express = require('express')
const app = express()
const PORT = 5000;

// BOOKSHELF DATA MODELS
const Users = require('./db/models/Users.js')
const Local = require('./db/models/Local.js')
const Food = require('./db/models/Food.js')

// MIDDLEWARE
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const bodyParser = require('body-parser')
const passport = require('passport')
const bcrypt = require('bcrypt')

// app.use(express.static('public'));

// bodyParser config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// redis session store
app.use(session({
  store: new RedisStore({ url: 'redis://redis-session-store:6379', logErrors: true }),
  secret: 'appetito',
  resave: false,
  saveUninitialized: true
}))

// passport config
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session


// ROUTES //
const authRoutes = require('./routes/authRoutes.js')
app.use('/auth', authRoutes)

// login-homepage
app.get('/', (req, res) => {
  res.json('HOMEPAGE REDIRECT')
})

// welcome-page (placeholder)
app.get('/welcome', (req, res) => {
  res.json('WELCOME PAGE REDIRECT')
})

// get all food items in database
app.get('/food', (req, res) => {
  // res.json(Food)
  Food
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })
})

// get all locations in database by latitude and longitude
app.get('/local', (req, res) => {

  Local
    .fetchAll({ columns: ['local_lat', 'local_long', 'user_id'] })
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })
})

// get all users in database (by name, email, and diet)
app.get('/users', (req, res) => {

  Users
    .fetchAll({ columns: ['name', 'email', 'diet'] })
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })
})


app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`)
})