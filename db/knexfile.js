// Update with your config settings.

module.exports = {
  client: "pg",
  // connection: {
  //     host: "127.0.0.1",
  //     database: "clack",
  // },
  connection: "postgres://localhost/",
  // port: 5432,
  // pool: {
  //     min: 2,
  //     max: 10,
  // },
  migrations: {
    // directory: __dirname = '/db/migrations',
    tableName: "knex_migrations"
  }
  // seeds: {
  //     directory: __dirname = '/db/seeds',
  // }
};
