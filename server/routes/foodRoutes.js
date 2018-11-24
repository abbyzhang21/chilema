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

// get food item by id from 'Food' table
foodRouter.get('/detail/:id', (req, res) => {
  const { id } = req.params

  console.log('FOOD SERVER HIT')

  Food
    .where({ id })
    .fetch()
    .then((foodItem) => {
      res.json(foodItem)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    })

})

foodRouter.get('/update/:id', (req, res) => {
  const { id } = req.params

  console.log('FOOD SERVER HIT')

  Food
    .where({ id })
    .fetch()
    .then((foodItem) => {
      res.json(foodItem)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    })

})

// post new food item into 'Food' table
foodRouter.post('/new', (req, res) => {
  console.log('FOOD REQ.BODY: ')
  const { id } = req.params;
  const payload = {
    user_id: req.body.user_id,
    category: req.body.category,
    item: req.body.item,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    fd_lat: Number(req.body.fd_lat),
    fd_long: Number(req.body.fd_long),

  }

  Food
    .forge(payload)
    .save()
    .then(foodItems => {
      res.json(foodItems.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })

})

// update new food item into 'Food' table
foodRouter.put('/update/:id', (req, res) => {
  const { id } = req.params

  console.log('REQ.BODY', req.body)

  // define constraints of put request
  const payload = {
    id: id,
    category: req.body.category,
    item: req.body.item,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    fd_lat: req.body.fd_lat,
    fd_long: req.body.fd_long,
    user_id: Number(req.body.user_id)
  }

  // ORM logic
  Food
    .where({ id })
    .fetch()
    .then((foodItem) => {
      return foodItem.save(payload)
    })
    .then((result) => {
      console.log('result', result)
      res.json(result)
    })

})

// delete a food item by 'id' from the 'Food' table
foodRouter.delete('/delete/:id', (req, res) => {

  const { id } = req.params

  // console.log()

  Food
    .where({ id })
    .destroy()
    .then(
      res.send('/users/detail/')
      // res.send('some info')
    )
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })


})

module.exports = foodRouter