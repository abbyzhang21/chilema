const express = require('express');
const authRouter = express.Router();

// BOOKSHELF DATA MODELS
const Users = require('../db/models/Users.js')

// PASSPORT LIBRARY
const passport = require('passport')
const LocalStrategy = require('passport-local')

// BCRYPT LIBRARY
const bcrypt = require('bcrypt')
const saltRounds = 12;

// upon successful login, retrieve user from db and store in Redis session
passport.serializeUser((user, done) => {
  console.log('serializing user: ', user)
  done(null, {
    id: user.id,
    email: user.email,
    password: user.password
  })
})

// upon successful authorization request, take information from session
passport.deserializeUser((user, done) => {
  console.log('deserializing users: ', user)
  done(null, {
    // id: user.attributes.id,
    // email: user.attributes.email
  })
})

// passport config
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  Users
    .where({ email })
    .fetch()
    .then((user) => {
      // WITHOUT BCRYPT //
      if (password === user.attributes.password) {
        done(null, user.attributes)
        console.log('SUCCESS!')
      } else {
        done(null, false)
        console.log('FAILURE!')
      }
      /// WITH BCRYPT //
      // if (password === user.attributes.password) {
      //   console.log(true)
      //   done(null, user.attributes)
      // bcrypt.compare(password, user.attributes.password)
      //   .then((result) => {
      //     console.log('passport localStrategy config result: ', result)
      //     if (result === true) {
      //       console.log('user has correct credentials')
      //       done(null, user.attributes)
      //     } else {
      //       console.log('user has incorrect credentials')
      //       done(null, false)
      //     }
      //   })
      //   .catch(err => {
      //     done(err)
      //   })
    })
    .catch((err) => {
      done(err)
    })
}))

// ROUTES
authRouter.get('/register', (req, res) => {
  res.json('get register page')
})

// register user new user and add them to the database
authRouter.post('/register', (req, res) => {

  const { name, last, email, password, phone, diet } = req.body;

  bcrypt.genSalt(saltRounds)
    .then(salt => {
      console.log('salt: ', salt)
      return bcrypt.hash(password, salt)
    })
    .then(hash => {
      console.log('hash: ', hash)
      return Users
        .forge({
          name: name,
          last: last,
          email: email,
          password: hash,
          phone: phone,
          diet: diet
        })
        .save()
    })
    .then(user => {
      user = user.toJSON()
      res.json(user)
    })
    .catch(err => {
      console.log('HASH ERROR: ', err)
      res.json(err)
    })
})

// LOCAL STRATEGY
authRouter.post('/login', passport.authenticate('local', { sucessRedirect: '/welcome', failureRedirect: '/' }), (req, res) => {
  console.log('USER AUTHENTICATED')
  // req.session.isAuthenticated = true;
  res.send('USER AUTHENTICATED')
});

// GOOGLE OAUTH
// authRouter.post('/login/google', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//   console.log('GOOGLE AUTHENTICATION')
//   res.json('GOOGLE AUTHENTICATION')
// })

// logout user (implement res.redirect to /login page)
authRouter.get('/logout', (req, res) => {
  req.logout()
  console.log('USER LOGGED OUT')
  res.redirect('/')
})

// sanity check to test authentication
authRouter.get('/protected', (req, res) => {
  if (req.session.isAuthenticated) {
    res.json('USER HAS PERMISSIONS')
  }
  else {
    res.json('USER HAS NO PERMISSIONS')
  }
})

module.exports = authRouter;