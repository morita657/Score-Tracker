exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { name: "John", email: "john@gmail.com" },
        { name: "Jessica", email: "jessica@gmail.com" },
        { name: "USA", email: "usa@gmail.com" }
      ]);
    });
};
