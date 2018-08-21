const Service = require('../_core/services/service');

class TaxonomyTermWrapperService extends Service {

  constructor() {
    super();

    this.endpoint = '/taxonomy_term/';

    // Map relationships
    this.relationships = {};

    // Map filter name to Drupal field
    this.filters = {};

    this.sort = {};
  }

}

module.exports = TaxonomyTermWrapperService;
