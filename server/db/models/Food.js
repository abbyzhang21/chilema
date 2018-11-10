const bookshelf = require('./bookshelf')

const Food = bookshelf.Model.extend({
  tableName: 'Food',
  // hasTimestamps: true
})

module.exports = Food