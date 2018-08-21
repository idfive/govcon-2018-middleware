STARSHIPS HUB API
===================

This API is designed to act as middleware between custom clients, and various external applications 
It utilizes GraphQl language for the client queries, then transforms and passes that request along to the appropriate API endpoint, then does some minor parsing to the response, before returning to the client. This can be extended in the future to query any location with an API, so that the end result is one endpoint (this one) that can fetch data from several different API sources.

AUTH
-------------------
This middleware uses basic auth, provided by Passport.js. Specifically:  https://github.com/jaredhanson/passport-http. This is by no means designed to be "super duper" secure, but rather throw in an obfuscation layer, being that this is a public API anyhow. List of user/pass combinations provided in server.js (var users) which can be edited/added to. Currently, use:
* govcon2018/govcon2018 (testing only)
* See server.js for accurate listing.


CORS
-------------------
This server utilizes the express CORS module (https://github.com/expressjs/cors).


DEVELOPMENT
-------------------
This middleware utilizes node.js, graphql, and an express.js server. It was developed by idfive for GovCon 2018.

* npm install
* node server.js

Dependencies:
* axios | To get info from drupal API endpoint
* cors | To lock down cors requests to API
* express | Middleware server scaffolding
* express-graphql/graphql | Enables graphql on this server
* lodash | Helper Library
* node-moment | Library to help format dates, primarily for events
* Passport/passport-http | For authentication
* truncate-html | Library used for truncating body to summary

PROJECT FOLDER SETUP
---------------------
* documentation | Holds more details on content types and general development notes.
* graphql | Holds schemas/classes/resolvers/etc that make the middleware API run. Organized by core (general setup and global stuff), then in folders by type.
* node_modules | Holds node_modules for development.
* public | Holds integration examples. These may be out of date depending on changes to the API.
