"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (knex) => {

  router.post("/login", (req, res) => {
    knex
      .select("*")
      .from('users')
      .where({email: req.body.email})
      .then((results) => {
        if (results.length === 0) {
          res.status(404).send("This user is not in our DB");
          return;
        }
        console.log("db password", results[0].password);
        if (!bcrypt.compareSync(req.body.password, results[0].password)) {
          res.status(404).send("Invalid password");
          return;
        }
        req.session.userId = results[0].id;
        res.redirect("/");
      });
  });
  router.post("/register", (req, res) => {
    knex('users')
      .insert({name: req.body.username, email: req.body.email, password: bcrypt.hashSync(req.body.password, 10)})
      .then(() => {
        return knex
          .select("*")
          .from('users')
          .where({email: req.body.email});
      })
      .then((results) => {
        req.session.userId = results[0].id;
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send("Bad Register");
      });
  });

  return router;
}
