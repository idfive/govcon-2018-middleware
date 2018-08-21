const _ = require('lodash');
const TaxonomyTermWrapper = require('../taxonomy_term/taxonomy_term_wrapper.class');
const TaxonomyTermWrapperService = require('../taxonomy_term/taxonomy_term_wrapper.service');
const taxonomyTermWrapperService = new TaxonomyTermWrapperService();

module.exports = {
  taxonomy: (args) => taxonomyTermWrapperService.getTaxonomy(args)
    .then(response => new TaxonomyTermWrapper(response.data, response.data.included || {}))
};
