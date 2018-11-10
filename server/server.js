const express = require('express')
const app = express()
const PORT = 5000;

// MIDDLEWARE
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const bodyParser = require('body-parser')

// bodyParser config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//redis session store
app.use(session({
  store: new RedisStore({ url: 'redis://redis-session-store:6379', logErrors: true }),
  secret: 'appetito',
  saveUninitialized: true
}))

// BOOKSHELF DATA MODELS
const Users = require('./db/models/Users.js')
const Local = require('./db/models/Local.js')
const Food = require('./db/models/Food.js')

// ROUTES //
const AuthRoutes = require('./routes/authRoutes.js')
app.use('/auth', AuthRoutes)

// login-homepage
app.get('/', (req, res) => {
  res.json('hello world!')
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
    })
})

// get all locations in database
app.get('/local', (req, res) => {
  // res.json(Local)
  Local
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })
})

// get all users in database
app.get('/users', (req, res) => {
  // res.json(Users)
  Users
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })
})


app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`)
})