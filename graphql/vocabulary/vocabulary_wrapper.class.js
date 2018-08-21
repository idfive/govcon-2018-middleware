const _ = require('lodash');
const VocabularyTerm = require('./vocabulary.class');
const Pagination = require('../_core/class/pagination.class');

class VocabularyTermWrapper {

  constructor(data, included) {
    this.pagination = new Pagination(data.meta, data.links);
    this.data = _.map(data.data, data => new VocabularyTerm(data, included));
  }
}

module.exports = VocabularyTermWrapper;
