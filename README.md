# Score-Tracker - API Solo Project

This is the first half of the solo project to create a CRUD API service with Express, Knex and Postgres. This service demonstrates to run a basic CRUD operation from backend side with two tables: trains and oedoline.
If you have installed [Postman](https://www.getpostman.com/), it is also fun to explore this service.

## Database Schema

![database schema](https://github.com/morita657/Score-Tracker/blob/master/public/img/crudproject.png?raw=true)

## Usage

To install dependencies:
`yarn install`
To start a database:
`yarn start`
To open Fronend:
`yarn open`
And open [http://localhost:8080](http://localhost:8080)

## Set Up

### Prerequisite

To create a database, you have to install [Postgres](https://www.postgresql.org/) at first. After installing, try run `psql`
Then you can create the database on terminal: `create database trainmap`
To check your database :
`\l`
To access trainmap database:
`\c trainmap`
To display tables(If you just installed the postgres and trainmap databse, the following command does not display tables):
`\dt`

On termianl,
To run a migrations and set up the database for the latest state:
`knex migrate:latest`
To run a migrations to roll back:
`knex migrate: rollback`
To make a new table
`knex migrate: make [file name]`
To seed the initial data to a database:
`knex seed: run`

## Technologies

[Express](https://expressjs.com/)
[Kinex](http://knexjs.org/)
[Postgres](https://www.postgresql.org/)
[Postman](https://www.getpostman.com/)
