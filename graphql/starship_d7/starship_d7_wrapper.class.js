const _ = require('lodash');
const Starship_D7 = require('../starship_d7/starship_d7.class');
const Pagination = require('../_core/class/pagination.class');

class StarshipD7Wrapper {

  constructor(data, included) {
    this.pagination = new Pagination(data.meta, data.links);
    this.data = _.map(data.data, data => new Starship_D7(data, included));
  }
}

module.exports = StarshipD7Wrapper;
