const express = require('express');
const authRouter = express.Router();

// BOOKSHELF DATA MODELS
const Users = require('../db/models/Users.js')
const Local = require('../db/models/Local.js')
const Food = require('../db/models/Food.js')

const bodyParser = require('body-parser')

// bodyParser config
authRouter.use(bodyParser.urlencoded({ extended: false }))
authRouter.use(bodyParser.json())

authRouter.get('/register', (req, res) => {
  res.json('get register page')
})

authRouter.post('/register', (req, res) => {
  // res.json('post register page')
  const { name, last, password, email, phone, diet } = req.body

  // const { name } = req.body
  // console.log(req.body)
  // console.log(name);

  // res.json(name)

  Users
    .forge(req.body)
    .save()
    // .then(() => {
    //   return Users.fetchAll()
    // })
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })

})

authRouter.post('/login', (req, res) => {

})

authRouter.post('/logout', (req, res) => {

})

authRouter.get('/protected', (req, res) => {

})



module.exports = authRouter;