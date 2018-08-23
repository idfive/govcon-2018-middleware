const _ = require('lodash');
const StarWars = require('./star_wars.class');

class StarWarsWrapper {

  constructor(data) {
    this.data = _.map(data.results, data => new StarWars(data));
  }
}

module.exports = StarWarsWrapper;
