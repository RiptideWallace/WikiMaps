"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/login", (req, res) => {
    knex
      .select("*")
      .from('users')
      .where({email: req.body.email, password: req.body.password})
      .then((results) => {
        if (results.length === 0) {
          res.status(404).send("This user is not in our DB");
          return;
        }
        res.redirect("/");
      });
  });
  router.post("/register", (req, res) => {
    knex('users')
      .insert({name: req.body.username, email: req.body.email, password: req.body.password})
      .then((results) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send("Bad Register");
      });
  });

  return router;
}
