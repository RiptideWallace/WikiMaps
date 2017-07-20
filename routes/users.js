"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // router.get("/", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("users")
  //     .then((results) => {
  //       res.json(results);
  //   });
  // });
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
