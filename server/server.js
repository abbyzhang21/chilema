const express = require("express");
const app = express();

const PORT = 5000;

// temp_DB mock data
const Food = require('./temp_DB/Food.js')
const Local = require('./temp_DB/Local.js')
const Users = require('./temp_DB/Users.js')

// ROUTES //

// login-homepage
app.get('/', (req, res) => {
  res.json('hello world!')
})

// get all food items in database
app.get('/food', (req, res) => {
  res.json(Food)
})

// get all locations in database
app.get('/local', (req, res) => {
  res.json(Local)
})

// get all users in database
app.get('/users', (req, res) => {
  res.json(Users)
})


app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`)
})