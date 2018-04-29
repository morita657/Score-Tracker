# Score-Tracker - API Solo Project

This is the first half of the solo project to create a CRUD API service with Express, Knex and Postgres. This service demonstrates to run a basic CRUD operation from backend side with two tables: trains and oedoline.<br />
If you have installed [Postman](https://www.getpostman.com/), it is also fun to explore this service.

## Database Schema

![database schema](https://github.com/morita657/Score-Tracker/blob/master/public/img/crudproject.png?raw=true)

## Usage

To install dependencies:<br />
`yarn install`<br />

To start a database:<br />
`yarn start`<br />

To open Fronend:<br />
`yarn open`<br />

And open [http://localhost:8080](http://localhost:8080)<br />

## Set Up

### Prerequisite

To create a database, you have to install [Postgres](https://www.postgresql.org/) at first. After installing, try run `psql`<br />
Then you can create the database on terminal: `create database trainmap`<br />
To check your database :<br />
`\l`<br />
To access trainmap database: <br />
`\c trainmap`<br />
To display tables(If you just installed the postgres and trainmap databse, the following command does not display tables):<br />
`\dt`<br />

On termianl,<br />
To run a migrations and set up the database for the latest state:<br />
`knex migrate:latest`<br />
To run a migrations to roll back:<br />
`knex migrate: rollback`<br />
To make a new table<br />
`knex migrate: make [file name]`<br />
To seed the initial data to a database:<br />
`knex seed: run`<br />

## Technologies

[Express](https://expressjs.com/)<br />
[Kinex](http://knexjs.org/)<br />
[Postgres](https://www.postgresql.org/)<br />
[Postman](https://www.getpostman.com/)
