const foodData = require('../../temp_DB/Food.js')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Food').del()
    .then(function () {
      // Inserts seed entries
      return knex('Food').insert(foodData);
    });
};
