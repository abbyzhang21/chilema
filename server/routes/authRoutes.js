const express = require('express');
const authRouter = express.Router();

// BOOKSHELF DATA MODELS
const Users = require('../db/models/Users.js')
// const Local = require('../db/models/Local.js')
// const Food = require('../db/models/Food.js')

const bodyParser = require('body-parser')

// bodyParser config
authRouter.use(bodyParser.urlencoded({ extended: false }))
authRouter.use(bodyParser.json())

authRouter.get('/register', (req, res) => {
  res.json('get register page')
})

authRouter.post('/register', (req, res) => {
  // res.json('post register page')
  // const { name, last, password, email, phone, diet } = req.body
  Users
    .forge(req.body)
    .save()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })
})

authRouter.post('/login', (req, res) => {
  // res.json('post login page')
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

authRouter.post('/logout', (req, res) => {
  req.session.destroy()
  res.json('User logged out')
  // implement res.redirect to /login page
})

authRouter.get('/protected', (req, res) => {
  if (req.session.isAuthenticated) {
    // do something for only authenticated users
    res.json('User has permissions')
  }
  else {
    res.json('User has no permissions')
  }
})



module.exports = authRouter;