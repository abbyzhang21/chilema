const bookshelf = require('./bookshelf')

const Local = bookshelf.Model.extend({
  tableName: 'Local',
})

module.exports = Local