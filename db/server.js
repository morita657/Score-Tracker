const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
// Load knex from the file that you have already initialized.
const knexfile = require("./knexfile.js");
const knex = require("knex")(knexfile);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/station", function(req, res) {
  knex
    .select()
    .from("oedoline")
    .then(function(todo) {
      res.send(todo);
    });
});

app.get("/station/:id", function(req, res) {
  knex
    .select()
    .from("oedoline")
    .where("id", req.params.id)
    .then(function(station) {
      res.send(station);
    });
});

app.post("/station", function(req, res) {
  knex("oedoline")
    .insert({
      name: req.body.name,
      train_id: req.body.train_id
    })
    .then(function() {
      knex
        .select()
        .from("oedoline")
        .then(function(station) {
          res.send(station);
        });
    });
});
// update
app.put("/station/:id", function(req, res) {
  knex("oedoline")
    .where("id", req.params.id)
    .update({
      name: req.body.name,
      train_id: req.body.train_id
    })
    .then(function() {
      knex
        .select()
        .from("oedoline")
        .then(function(station) {
          res.send(station);
        });
    });
});
// delete
app.delete("/station/:id", function(req, res) {
  knex("oedoline")
    .where("id", req.params.id)
    .del()
    .then(function() {
      knex
        .select()
        .from("oedoline")
        .then(function(todos) {
          res.send(todos);
        });
    });
});

app.listen(port, function() {
  console.log("listening....", port);
});
