const localData = require('../../temp_DB/Local.js')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Local').del()
    .then(function () {
      // Inserts seed entries
      return knex('Local').insert(localData);
    });
};
