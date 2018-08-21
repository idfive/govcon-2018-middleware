var express = require('express');
var graphqlHTTP = require('express-graphql');
var cors = require('cors');
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;

var port = process.env.PORT || 8080;
var app = express();

// CORS
// =============================================================================
// Configure Basic CORS whitelist for extra protection

// Sets simple list of whitelisted url's
var whitelist = [
  /umd\.edu\/?$/,
  'http://localhost:8000',
  'http://localhost:8080',
  'https://govcon-2018-starships.herokuapp.com',
  'http://govcon-2018-starships.herokuapp.com',
  'http://127.0.0.1:8080',
  'http://127.0.0.1:4000'
];

var corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (origin && whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS Policy'))
    }
  }
}

app.use(cors(corsOptions));

// Auth
// =============================================================================
// Configure the Basic strategy for use by Passport. This has been disabled for now, but may be revisited in the future.

// Sets simple list of authorized users
var users = {
  'govcon2018': 'govcon2018'
};

passport.use(new Strategy(
  function (username, password, done) {
    if (!users[username] || users[username] != password) {
      return done(null, false);
    }
    return done(null, { username: username });
  }
));

app.use(passport.authenticate('basic', { session: false }));

// Be able to use static files.
app.use(express.static('public'));

// Graphql
var schema = require('./graphql/_core/schema/_schema');
var resolvers = require('./graphql/_core/schema/_resolvers');

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(port);

console.log('UMD Middleware Server running on port ' + port);
console.log('Running a GraphQL API testing server at /graphql');
