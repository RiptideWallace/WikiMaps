"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (knex) => {

  router.get("/:id/maps", (req, res) => {
    knex
      .select("maps.name", "maps.description", "maps.image_url", "maps.id")
      .from('maps')
      .leftJoin('users', 'maps.user_id', 'users.id')
      .where({user_id: req.params.id})
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(404).send("This User Does Not Exist");
      });
  });
  router.get("/:id/favourites", (req, res) => {
    knex
      .select("*")
      .from('favourites')
      .leftJoin('maps', 'favourites.map_id', 'maps.id')
      .where("favourites.user_id", req.params.id)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(404).send("This User's Map Does Not Exist");
      });
  });
  router.get("/:id/show", (req, res) => {
    knex('users')
      .where({id: req.params.id})
      .then((results) => {
        if (results.length === 0) {
          res.status(404).send("This user is not in our DB");
          return;
        }
        const templateVars = {user: results[0]};
        res.render("user", templateVars);
      });
  });
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
