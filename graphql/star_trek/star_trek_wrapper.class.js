const _ = require('lodash');
const Starship = require('../star_trek/star_trek.class');

class StarTrekWrapper {

  constructor(data, included) {
    this.data = _.map(data.data, data => new Starship(data, included));
  }
}

module.exports = StarTrekWrapper;
