const userData = require('../../temp_DB/Users.js')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert(userData);
    });
};
