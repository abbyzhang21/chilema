// Update with your config settings.

// May need to be updated with your config settings in env file.

require('dotenv').config({ path: '../.env' })

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOSTNAME,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_CONTAINER_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOSTNAME,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_CONTAINER_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOSTNAME,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_CONTAINER_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};

