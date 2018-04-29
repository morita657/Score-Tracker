exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todos").insert([
        { title: "John play a video game", user_id: 1 },
        { title: "Jessica eats a spaguetthi", user_id: 2 },
        { title: "USA is the good place", user_id: 3 }
      ]);
    });
};
