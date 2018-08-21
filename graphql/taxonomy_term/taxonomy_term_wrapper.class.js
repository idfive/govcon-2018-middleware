const _ = require('lodash');
const TaxonomyTerm = require('./taxonomy_term.class');
const Pagination = require('../_core/class/pagination.class');

class TaxonomyTermWrapper {

  constructor(data, included) {
    this.pagination = new Pagination(data.meta, data.links);
    this.data = _.map(data.data, data => new TaxonomyTerm(data, included));
  }
}

module.exports = TaxonomyTermWrapper;
