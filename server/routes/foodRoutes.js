const express = require('express')
const foodRouter = express.Router()

// BOOKSHELF DATA MODELS
const Food = require('../db/models/Food.js')

// get all food items in database
foodRouter.get('/', (req, res) => {
  Food
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })
})

foodRouter.post('/new', (req, res) => {
  Food
    .forge(req.body)
    .save()
    .then(foodItems => {
      res.json(foodItems.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })
})

foodRouter.put('/', (req, res) => {
  // update new food item into 'Food' table
})

// delete a food item by 'id' from the 'Food' table
foodRouter.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  console.log('typeof id :', typeof id)
  Food
    .where({ id })
    .destroy()
    .then(
      res.redirect('/food')
    )
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })
})

module.exports = foodRouter