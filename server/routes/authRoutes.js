const express = require('express');
const authRouter = express.Router();

// BOOKSHELF DATA MODELS
const Users = require('../db/models/Users.js')

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

// login user
authRouter.post('/login', (req, res) => {
  const { email, password } = req.body
  Users
    .where({ email })
    .fetch()
    .then(user => {
      if (password === user.attributes.password) {
        req.session.isAuthenticated = true
        res.json("USER AUTHENTICATED")
      }
      else {
        res.json("INCORRECT PASSWORD")
      }
    })
    .catch(err => {
      console.log('err', err)
      res.json(err)
    })
})

// logout user (implement res.redirect to /login page)
authRouter.get('/logout', (req, res) => {
  req.session.destroy()
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