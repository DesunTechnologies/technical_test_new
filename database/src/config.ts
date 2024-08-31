require('dotenv').config();

const database = {
  url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5436/technical_test',
  dialect: 'postgres',
  schema: 'public',
  logging: process.env.DEBUG_SEQUELIZE ? console.log : false,
};

module.exports = {
  development: database,
  test: database,
  production: database,
};
