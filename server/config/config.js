module.exports = {
  global: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'test',
    password: 'postgres',
    database: 'test_db',
    host: 'postgres',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  dev: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'task_listing_app',
    host: 'host.docker.internal',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  prod: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    operatorsAliases: false,
  },
};
