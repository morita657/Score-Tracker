// Take from knexfile.js. If there are two selections such as development and production environment, you can specify here.
const environment = process.NODE_ENV;
const config = require("./knexfile.js")[environment];
console.log(config);
module.exports = require("knex");
