exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("trains", function(table) {
      table.increments();
      table.string("name").notNullable();
      table.string("length").notNullable();
      table.string("weight").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("oedoline", function(table) {
      table.increments();
      table.string("name").notNullable();
      table
        .integer("train_id")
        .references("id")
        .inTable("trains");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("oedoline").dropTable("trains");
};
