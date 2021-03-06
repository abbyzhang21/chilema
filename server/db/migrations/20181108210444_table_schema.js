
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Users', (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('last').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.string('phone').notNullable()
      table.boolean('diet').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
    }),
    knex.schema.createTable('Local', (table) => {
      table.increments('id').primary()
      table.string('address').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('zip').notNullable()
      table.string('local_lat').notNullable()
      table.string('local_long').notNullable()
      table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('Local')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    }),
    knex.schema.createTable('Food', (table) => {
      table.increments('id').primary()
      table.string('category').notNullable()
      table.string('item').notNullable()
      table.string('description').notNullable()
      table.string('price').notNullable()
      table.string('image').notNullable()
      table.string('fd_lat').notNullable()
      table.string('fd_long').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('Users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Food'),
    knex.schema.dropTable('Users'),
    knex.schema.dropTable('Local')
  ])
};
