STARSHIPS HUB API
===================

This is an example middleware client built for presentation at drupal GovCon 2018 This example API is designed to act as middleware between two drupal clients (d7 and d8), and the Star Wars API. It utilizes GraphQl language for the client queries, then transforms and passes that request along to the appropriate API endpoint, then does some minor parsing to the response, before returning to the client. This can be extended in the future to query any location with an API, so that the end result is one endpoint (this one) that can fetch data from several different API sources.

AUTH
-------------------
This middleware uses basic auth, for an example, provided by Passport.js. Specifically:  https://github.com/jaredhanson/passport-http. This is by no means designed to be "super duper" secure, but rather throw in an obfuscation layer, being that this is a public API anyhow. List of user/pass combinations provided in server.js (var users) which can be edited/added to. Currently, use:
* govcon2018/govcon2018 (testing only)
* See server.js for accurate listing.

DEVELOPMENT
-------------------
This middleware utilizes node.js, graphql, and an express.js server. It was developed by idfive for GovCon 2018. To run locally:

* npm install
* node server.js

Dependencies:
* axios | To get info from drupal/other API endpoints
* express | Middleware server scaffolding
* express-graphql/graphql | Enables graphql on this server
* lodash | Helper Library
* Passport/passport-http | For authentication
* truncate-html | Library used for truncating body to summary

PROJECT FOLDER SETUP
---------------------
* graphql | Holds schemas/classes/resolvers/etc that make the middleware API run. Organized by core (general setup and global stuff), then in folders by type.
* node_modules | Holds node_modules for development.
* public | Holds small helper text directing to /graphiql.
