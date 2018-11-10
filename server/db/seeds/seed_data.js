const foodData = require('../../temp_DB/Food.js')
const localData = require('../../temp_DB/Local.js')
const userData = require('../../temp_DB/Users.js')



exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(() => {
      return knex('Local').del()
        .then(() => {
          return knex('Food').del()
        })
        // Inserts seed entries
        .then(() => {
          return knex('Local').insert(localData);
        })
        .then(() => {
          return knex('Users').insert(userData);
        })
        .then(() => {
          return knex('Food').insert(foodData)
        })
    });
};
