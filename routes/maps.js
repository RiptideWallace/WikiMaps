"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("maps")
      .then((results) => {
        res.json(results);
    });
  });
  router.get("/:id", (req, res) => {
    knex
      .select("*")
      .from('maps')
      .where({id: req.params.id})
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(404).send("This Map Does Not Exist");
      });
  });

  return router;
}




