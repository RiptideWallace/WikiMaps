"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const cookieSession = require('cookie-session');

// Seperated Routes for each Resource
const mapRoutes = require("./routes/maps");
const userRoutes = require("./routes/users");
//const markerRoutes = require("./routes/markers");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

// Set up session cookies
app.use(cookieSession({
  keys: ['doggos', 'bork']
}));

// Set up global session vars
app.use((req, res, next) => {
  res.locals.userId = req.session.userId;
  next();
})

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes

app.use("/maps", mapRoutes(knex));
app.use("/users", userRoutes(knex));
//app.use("/api/markers", markerRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});




//// ~~~ USER AUTH ROUTES ~~~ ////

// Login page
app.get("/login", (req, res) => {
  if (req.session.userId) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Logout (POST)
app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

// Register page (GET)
app.get("/register", (req, res) => {
  if (req.session.userId) {
    res.redirect("/");
    return;
  }
  res.render("register");
});





app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
