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

  router.post("/new", (req, res) => {
    knex('maps')
      .insert({name: req.body.name, description: req.body.description, image_url: req.body.image_url})
      .then((results) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send("New Map Error");
      });
  });

  router.get("/new", (req, res) => {
    if (req.session.userId) {
      res.render("create_map");
      return;
    }
    res.redirect("/login");
  });

  router.get("/:mapId", (req, res) => {
    knex
      .select("*")
      .from('maps')
      .where({id: req.params.mapId})
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(404).send("This Map Does Not Exist");
      });
  });

  router.get("/:mapId/show", (req, res) => {
    const templateVars = {
      mapId: req.params.mapId
    }
    res.render("maps_show", templateVars);
  });

  router.get

  router.get("/:mapId/markers/:markerId", (req, res) => {
    knex
      .select("*")
      .from('markers')
      .where({id: req.params.markerId})
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(404).send("This Marker Does Not Exist");
      });
  });

  router.get("/:mapId/markers", (req, res) => {
    knex
      .select("*")
      .from('markers')
      .where({maps_id: req.params.mapId})
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(404).send("Map & Markers Do Not Match")
      });
  });

  return router;
}




