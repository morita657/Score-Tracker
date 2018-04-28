const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
// Load knex from the file that you have already initialized.
const knexfile = require("./knexfile.js");
const knex = require("knex")(knexfile);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/todos", function(req, res) {
  knex.raw("select * from todos").then(function(todos) {
    res.send(todos);
  });
});

app.listen(port, function() {
  console.log("listening....", port);
});
