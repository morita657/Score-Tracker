exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todos").insert([
        { id: 1, title: "John", user_id: 1 },
        { id: 2, title: "Jessica", user_id: 2 },
        { id: 3, title: "USA", user_id: 3 }
      ]);
    });
};
