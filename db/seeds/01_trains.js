exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("trains")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trains").insert([
        { name: "12-000-noncolor", length: "16,750m", weight: "25.5t" },
        { name: "12-600", length: "16,750m", weight: "25.6t" },
        { name: "12-000-color", length: "16,750m", weight: "25.7t" }
      ]);
    });
};
