# WikiMaps

WikiMaps is a webapplication that makes use of the Google Maps API alongside Express, EJS, and jQuery. It allows users to create their own maps with lists of notable points, view maps made by other users, and favourite maps. User authentication is handled by bcrypt and cookie-session. PostgreSQL stores map and user data, with migration and seeding using Knex. Sass and Bootstrap are used for styling with a focus on mobile-first usability.

WikiMaps is a group effort, created as part of course work from [Lighthouse Labs](https://github.com/lighthouse-labs).

## Team Members
- [Chris Bryson]https://github.com/RiptideWallace
- [Madeline Collier](https://github.com/MadelineCollier)
- [Tyler Krys](https://github.com/ty2k)
- [Lawrence Surges](https://github.com/surgeslc)

## Installation

`npm install`

## Database Setup

The included `knexfile.js` sets up Knex for migration and seeding into a PostgreSQL database. Create a `.env` file using the including `.env.example` after creating an empty PostgreSQL database. In your installation's home directory, run `knex migrate:latest` to create your database tables (see [this Knex migration article](http://perkframework.com/v1/guides/database-migrations-knex.html) for more on Knex migrations). You can use `knex seed:run` to seed the database with some initial map and user data.

## Run

`npm start`

## Dependencies

 - bcrypt": "^1.0.2",
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