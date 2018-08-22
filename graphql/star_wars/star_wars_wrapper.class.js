const _ = require('lodash');
const StarWars = require('./star_wars.class');
const Pagination = require('../_core/class/pagination.class');

class StarWarsWrapper {

  constructor(data) {
    this.pagination = new Pagination(data.meta, data.links);
    this.data = _.map(data.results, data => new StarWars(data));
  }
}

module.exports = StarWarsWrapper;
