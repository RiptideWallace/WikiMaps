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
    knex('markers')
      .insert({title: req.body.title, outline: req.body.outline, link: req.body.link, longitude: req.body.longitude, latitude: req.body.latitude})
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

  router.get("/likes/:id", (req, res) => {
    knex
      .select("*")
      .from('favourites')
      .where({map_id: req.params.id})
      .then((results) => {
        res.json({len: results.length});
      })
      .catch((err) => {
        res.status(404).send("NO likes :(");
      });
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
      mapId: req.params.mapId,
      markerId: req.params.markerId
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




