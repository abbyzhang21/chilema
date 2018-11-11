const bookshelf = require('./bookshelf')

const Food = bookshelf.Model.extend({
  tableName: 'Food',
})

module.exports = Food