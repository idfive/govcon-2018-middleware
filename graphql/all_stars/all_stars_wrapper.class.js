const _ = require('lodash');
const Starship = require('./all_stars.class');

class AllStarsWrapper {

  constructor(data, included) {
    this.data = _.map(data.data, data => new Starship(data, included));
  }
}

module.exports = AllStarsWrapper;
