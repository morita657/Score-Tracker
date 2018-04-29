const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
// Load knex from the file that you have already initialized.
const knexfile = require("./knexfile.js");
// const knex = require("./knexfile.js");
const knex = require("knex")(knexfile);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/todos", function(req, res) {
  knex
    .select()
    .from("todos")
    .then(function(todo) {
      res.send(todo);
    });
});

app.get("/todos/:id", function(req, res) {
  knex
    .select()
    .from("todos")
    .where("id", req.params.id)
    .then(function(todos) {
      res.send(todos);
    });
});

app.post("/todos", function(req, res) {
  knex("todos")
    .insert({
      title: req.body.title,
      user_id: req.body.user_id
    })
    .then(function() {
      knex
        .select()
        .from("todos")
        .then(function(todos) {
          res.send(todos);
        });
    });
  // knex.raw('insert into todos(title, user_id) values(?, ?)', ['go play some sports', '1'])
  //   .then(function () {
  //     knex.select().from('todos')
  //       .then(function (todo) {
  //         res.send(todo);
  //       })
  //   })
});
// update
app.put("/todos/:id", function(req, res) {
  knex("todos")
    .where("id", req.params.id)
    .update({
      title: req.body.title,
      completed: req.body.completed
    })
    .then(function() {
      knex
        .select()
        .from("todos")
        .then(function(todos) {
          res.send(todos);
        });
    });
});
// delete
app.delete("/todos/:id", function(req, res) {
  knex("todos")
    .where("id", req.params.id)
    .del()
    .then(function() {
      knex
        .select()
        .from("todos")
        .then(function(todos) {
          res.send(todos);
        });
    });
});

app.listen(port, function() {
  console.log("listening....", port);
});
