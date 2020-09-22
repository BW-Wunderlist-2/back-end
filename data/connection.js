const knex = require('knex');

const knexflie = require("../knexfile");

const enviroment = process.env.DB_ENV || "development";

const config = knexflie[enviroment];

module.exports = knex(config);