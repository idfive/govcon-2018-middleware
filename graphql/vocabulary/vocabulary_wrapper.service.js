const Service = require('../_core/services/service');

class VocabularyWrapperService extends Service {

  constructor() {
    super();

    this.endpoint = '/taxonomy_vocabulary/taxonomy_vocabulary';

    // Map relationships
    this.relationships = {};

    // Map filter name to Drupal field
    this.filters = {};

    this.sort = {};
  }

}

module.exports = VocabularyWrapperService;
