const bookshelf = require('./bookshelf')

const Local = bookshelf.Model.extend({
  tableName: 'Local',
  // hasTimestamps: true
})

module.exports = Local