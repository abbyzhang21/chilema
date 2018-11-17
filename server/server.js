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
const cors = require('cors')

// app.use(express.static('public'));

// bodyParser config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors
app.use(cors())

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

// ROUTES //
const authRoutes = require('./routes/authRoutes.js')
const foodRoutes = require('./routes/foodRoutes.js')
const localRoutes = require('./routes/localRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

app.use('/auth', authRoutes)
app.use('/food', foodRoutes)
app.use('/local', localRoutes)
app.use('/users', userRoutes)

// login-homepage
app.get('/', (req, res) => {
  res.json('HOMEPAGE REDIRECT')
})

// welcome-page (placeholder)
app.get('/welcome', (req, res) => {
  res.json('WELCOME PAGE REDIRECT')
})

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`)
})