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

// get user by id from 'Users' table
usersRouter.get('/detail/:id', (req, res) => {
  const { id } = req.params

  Users
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

// update a user entry in the 'Users' table
usersRouter.put('/update/:id', (req, res) => {
  const { id } = req.params

  console.log(id)

  // define constraints of put request
  const payload = {
    id: id,
    name: req.body.name,
    last: req.body.last,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    diet: req.body.diet,
  }

  // ORM logic
  Users
    .where({ id })
    .fetch()
    .then((userProfile) => {
      return userProfile.save(payload)
    })
    .then((result) => {
      console.log('result', result)
      res.json(result)
    })

})

// delete a user by 'id' from the 'Users' table
usersRouter.delete('/delete/:id', (req, res) => {
  const { id } = req.params

  Users
    .where({ id })
    .destroy()
    .then(
      res.redirect('/users')
    )
    .catch(err => {
      console.log('err: ', err)
      res.json(err)
    })

})

module.exports = usersRouter