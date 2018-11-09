
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Users', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('last').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.integer('phone').unique().notNullable();
      table.boolean('diet').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.integer('location_id').references('id').inTable('Local').notNullable()
    }),
    knex.schema.createTable('Local', (table) => {
      table.increments('id').primary();
      table.string('address').notNullable();
      table.string('city').notNullable();
      table.string('state').notNullable();
      table.string('zip').notNullable();
      table.integer('local_lat').notNullable();
      table.integer('local_long').notNullable();
      table.integer('local_id')
        .references('Food.id');
    }),
    knex.schema.createTable('Food', (table) => {
      table.increments('id').primary();
      table.string('category').notNullable();
      table.string('item').notNullable();
      table.string('description').notNullable();
      table.integer('price').notNullable();
      table.string('image').notNullable();
      table.integer('food_lat').notNullable();
      table.integer('food_long').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.integer('user_id').references('id').inTable('Users').notNullable()
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Users').onDelete('cascade'),
    knex.schema.dropTable('Location').onDelete('cascade'),
    knex.schema.dropTable('Food').onDelete('cascade')
  ])
};
