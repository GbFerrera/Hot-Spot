const path = require("path");
require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5433,
            user: 'admin',
            password: 'minhasenha',
            database: 'meuDb'
          },
        pool: {
          min: 2,
          max: 10,
          acquireTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          idleTimeoutMillis: 10000,
          createRetryIntervalMillis: 200
        },
        migrations: {
          directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
        },
        seeds: {
          directory: path.resolve(__dirname, "src", "database", "knex", "seeds")
        }
      },
  
      production: {
        client: 'pg',
        connection: process.env.DATABASE_URL || 'postgresql://postgres:ooAXctmcPMpDtfKqsVxJOZcbzOTUgnPn@interchange.proxy.rlwy.net:10820/railway',
        pool: {
          min: 2,
          max: 10,
          acquireTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          idleTimeoutMillis: 10000,
          createRetryIntervalMillis: 200
        },
        migrations: {
          directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
        },
        seeds: {
          directory: path.resolve(__dirname, "src", "database", "knex", "seeds")
        }
      }
};