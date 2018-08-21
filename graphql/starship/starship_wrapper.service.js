const Service = require('../_core/services/service');

class StarshipWrapperService extends Service {

  constructor() {
    super();

    this.endpoint = '/node/starship';

    // Map relationships
    this.relationships = {
      'field_starship_class': {
        'reference': 'taxonomy_term--starship_class',
        'fields': [
          'tid',
          'name',
          'path'
        ]
      }
    };

    // Map filter name to Drupal field
    this.filters = {
      'promote': 'promote',
      'class': 'field_starship_class'
    };

    this.sort = {
      'title': 'title'
    };
  }

}

module.exports = StarshipWrapperService;
