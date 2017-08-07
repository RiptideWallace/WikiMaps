# WikiMaps

WikiMaps is a web application that lets users plot points of interest on maps to share with the world. WikiMaps makes use of the Google Maps API alongside Express, EJS, and jQuery. Users can create maps, view maps made by other users, and favourite maps to keep track of them on their profile. 

User authentication is handled by bcrypt and cookie-session. PostgreSQL stores map and user data, with migration and seeding using Knex. Sass and Bootstrap are used for styling with a focus on mobile-first usability.

WikiMaps is a group effort, created as part of course work from [Lighthouse Labs](https://github.com/lighthouse-labs).

## Team Members
- [Chris Bryson](https://github.com/RiptideWallace)
- [Lawrence Surges](https://github.com/surgeslc)
- [Madeline Collier](https://github.com/MadelineCollier)
- [Tyler Krys](https://github.com/ty2k)

## Installation

`npm install`

## Database Setup

The included `knexfile.js` sets up Knex for migration and seeding into a PostgreSQL database. Create a `.env` file using the including `.env.example` after creating an empty PostgreSQL database. In your installation's home directory, run `knex migrate:latest` to create your database tables (see [this Knex migration article](http://perkframework.com/v1/guides/database-migrations-knex.html) for more on Knex migrations). You can use `knex seed:run` to seed the database with some initial map and user data.

## Run

`npm start`

## Dependencies

 - "bcrypt": "^1.0.2",
 - "body-parser": "^1.15.2",
 - "cookie-session": "^2.0.0-beta.2",
 - "dotenv": "^4.0.0",
 - "ejs": "^2.4.1",
 - "express": "^4.13.4",
 - "knex": "^0.13.0",
 - "knex-logger": "^0.1.0",
 - "morgan": "^1.7.0",
 - "node-sass": "4.3.0",
 - "node-sass-middleware": "^0.11.0",
 - "pg": "^7.0.1"

 ## Screenshots

![WikiMaps homepage map index](https://raw.githubusercontent.com/RiptideWallace/WikiMaps/master/docs/Screenshot-WikiMaps-index.png)

![Map with marker list](https://raw.githubusercontent.com/RiptideWallace/WikiMaps/master/docs/Screenshot-map-with-marker-list.png)

![Top navigation menu expanded](https://raw.githubusercontent.com/RiptideWallace/WikiMaps/master/docs/Screenshot-nav-menu-expanded.png)
