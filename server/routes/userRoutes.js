const express = require('express')
const usersRouter = express.Router()

// BOOKSHELF DATA MODELS
const Users = require('../db/models/Users.js')

// get all food users from 'Users' database
usersRouter.get('/', (req, res) => {
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

usersRouter.post('/', (req, res) => {
  // post new food item into 'Food' table
})

usersRouter.put('/', (req, res) => {
  // update new food item into 'Food' table
})

usersRouter.delete('/', (req, res) => {
  // delete a food item from the database
})

module.exports = usersRouter