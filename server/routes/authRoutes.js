const express = require('express');
const authRouter = express.Router();

// BOOKSHELF DATA MODELS
const Users = require('../db/models/Users.js')

// PASPORT & BCRYPT LIBRARIES
const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')

// upon successful login, get user from database, save
// save user into Redis session store
passport.serializeUser((user, done) => {
  console.log('serializing user: ', user)
  done(null, user.id)
})

// upon successful authorization request, take information from the session
// for example userId, to retrieve the user record from the db, and put it into req.user
passport.deserializeUser((user, done) => {
  console.log('deserializing users: ', user)
  // console.log(req.user)
  done(null, {
    id: user.attributes.id,
    email: user.attributes.email
  })
})

// passport config
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  console.log('LS EMAIL: ', email)
  console.log('LS PASSWORD: ', password)
  Users
    .where({ email })
    .fetch()
    .then((user) => {
      console.log('local-storage user: ', user)
      // return user
      console.log('passport localStrategy config password: ', password)
      console.log('passport localStrategy config user.attributes.password: ', user.attributes.password)
      if (password === user.attributes.password) {
        console.log(true)
      }
      bcrypt.compare(password, user.attributes.password)
        .then((result) => {
          console.log('passport localStrategy config result: ', result)
          if (result === true) {
            console.log('user has correct credentials')
            done(null, user.attributes)
          } else {
            console.log('user has incorrect credentials')
            done(null, false)
          }
        })
        .catch(err => {
          done(err)
        })
    })
    .catch((err) => {
      done(err)
    })
}))

// ROUTES
authRouter.get('/register', (req, res) => {
  res.json('get register page')
})

// register user
authRouter.post('/register', (req, res) => {
  Users
    .forge(req.body)
    .save()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })
})

authRouter.post('/login', passport.authenticate('local', { sucessRedirect: '/welcome', failureRedirect: '/' }), (req, res) => {
  console.log('USER AUTHENTICATED')
  // req.session.isAuthenticated = true;
  res.send('USER AUTHENTICATED')
});

// authRouter.post('/login/google', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//   console.log('GOOGLE AUTHENTICATION')
//   res.json('GOOGLE AUTHENTICATION')
// })

// logout user (implement res.redirect to /login page)
authRouter.get('/logout', (req, res) => {
  req.logout()
  res.json('USER LOGGED OUT')
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