const _ = require('lodash');
const Starship = require('./starship.class');
const Pagination = require('../_core/class/pagination.class');

class StarshipWrapper {

  constructor(data, included) {
    this.pagination = new Pagination(data.meta, data.links);
    this.data = _.map(data.data, data => new Starship(data, included));
  }
}

module.exports = StarshipWrapper;
