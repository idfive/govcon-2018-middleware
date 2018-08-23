var express = require('express');
var graphqlHTTP = require('express-graphql');
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;

var port = process.env.PORT || 8080;
var app = express();

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

console.log('Starship example Middleware Server running on port ' + port);
console.log('Running a GraphQL API testing server at /graphql');
