/* eslint-disable no-console */
const Promise = require("bluebird");
const { expect } = require("chai");
const knexfile = require("../db/knexfile.js");
const config = require("../config");
const knex = require("knex")(knexfile);
// const db = require("../db")(config.db);
// console.log('db: ', db);

const forcePromiseReject = () => {
  throw new Error("This promise should have failed, but did not.");
};

describe("stations", () => {
  // Read initial station table state
  it("should return the correct intial table data numbers", () => {
    knex
      .select()
      .from("oedoline")
      .then(stations => {
        let stationNum = stations.length;
        expect(stationNum).to.equal(38);
      });
  });
  it("should read speciic id number", () => {
    knex
      .select()
      .from("oedoline")
      .where("id", 1)
      .then(station => {
        expect(station[0].name).to.equal("Shinjuku-nishiguchi");
      });
  });

  describe("when new station added, ", () => {
    before(() => {
      knex
        .insert({
          name: "New train station",
          train_id: 1
        })
        .from("oedoline")
        .then(station => {
          knex.select().from("oedoline");
        });
    });
    it("should be added a new station", () => {
      knex
        .select()
        .from("oedoline")
        .then(stations => {
          let stationNum = stations.length;
          expect(stationNum).to.equal(38);
        });
    });
  });
  describe("when station name has changed", () => {
    before(() => {
      knex("oedoline")
        .where("id", 38)
        .update({
          name: "Code-Chrysalis-Station",
          train_id: 1
        })
        .then(() => {
          knex.select().from("oedoline");
        });
    });
    after(() => {
      knex
        .del()
        .from("oedoline")
        .where("name", "New train station")
        .then(() => {
          knex.select().from("oedoline");
        });
    });
    it("should return the changed name", () => {
      knex
        .select()
        .from("oedoline")
        .where("id", 38)
        .then(station => {
          expect(station[0].name).to.equal("Code-Chrysalis-Station");
        });
    });
  });
});
