const _ = require('lodash');
const Starship = require('./star_wars.class');

class StarWarsWrapper {

  constructor(data) {
    this.data = _.map(data.results, data => new Starship(data));
  }
}

module.exports = StarWarsWrapper;
