const bookshelf = require('./bookshelf')

const Users = bookshelf.Model.extend({
  tableName: 'Users',
  // hasTimestamps: true
})

module.exports = Users