exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "John", email: "john@gmail.com" },
        { id: 2, name: "Jessica", email: "jessica@gmail.com" },
        { id: 3, name: "USA", email: "usa@gmail.com" }
      ]);
    });
};
