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
  // const { id, name, last, password, email, phone, diet, location_id } = req.body

  const item = req.body
  console.log('REQ.BODY: ', req.body)
  console.log('SERVER POST: ', item)

  Users
    .forge(item)
    .save()
    .then(result => {
      return Users.fetchAll()
    })
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })

  // console.log('REGISTER POST: ', req.body)

  // Users
  //   .forge({ id, name, last, password, email, phone, diet, location_id })
  //   .save()
  //   .then(result => {
  //     return Users.fetchAll()
  //   })
  //   .then(items => {
  //     res.json(items.serialize())
  //   })
  //   .catch(err => {
  //     console.log('err: ', err)
  //   })

})

authRouter.post('/login', (req, res) => {

})

authRouter.post('/logout', (req, res) => {

})

authRouter.get('/protected', (req, res) => {

})



module.exports = authRouter;