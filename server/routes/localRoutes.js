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

// get location by id from 'Local' table
localRouter.get('/detail/:id', (req, res) => {
  const { id } = req.params

  Local
    .where({ id })
    .fetch()
    .then((location) => {
      res.json(location)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    })

})

// post new location item into 'Local' table
localRouter.post('/new', (req, res) => {

  Local
    .forge(req.body)
    .save()
    .then(newLocal => {
      res.json(newLocal.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })

})

// update new location item into 'Local' table
localRouter.put('/update/:id', (req, res) => {
  const { id } = req.params

  // define constraints of put request
  const payload = {
    id: id,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    local_lat: req.body.local_lat,
    local_long: req.body.local_long,
    user_id: req.body.user_id
  }

  // ORM logic
  Local
    .where({ id })
    .fetch()
    .then((locationItem) => {
      return locationItem.save(payload)
    })
    .then((result) => {
      console.log('result', result)
      res.json(result)
    })

})

// delete a location item by 'id' from the 'Local' table
localRouter.delete('/delete/:id', (req, res) => {
  const { id } = req.params

  Local
    .where({ id })
    .destroy()
    .then(
      res.redirect('/local')
    )
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })

})

module.exports = localRouter