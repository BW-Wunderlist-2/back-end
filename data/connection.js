const knex = require('knex');

const knexfile = require("../knexfile");

const enviroment = process.env.DB_ENV || "development";

const config = knexfile[enviroment];

module.exports = knex(config);