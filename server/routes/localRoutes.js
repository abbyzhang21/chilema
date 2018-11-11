const express = require('express')
const localRouter = express.Router()

// BOOKSHELF DATA MODELS
const Local = require('../db/models/Local.js')

// get all locaion items from 'Local' table
localRouter.get('/', (req, res) => {
  Local
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })
})

localRouter.post('/', (req, res) => {
  // post new food item into 'Food' table
})

localRouter.put('/', (req, res) => {
  // update new food item into 'Food' table
})

localRouter.delete('/', (req, res) => {
  // delete a food item from the database
})

module.exports = localRouter