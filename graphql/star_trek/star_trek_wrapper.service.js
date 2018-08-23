const Service = require('../_core/services/service.d7');

class StarTrekWrapperService extends Service {

  constructor() {
    super();

    this.endpoint = '/starships';

    // Map relationships
    this.relationships = {
      'field_starship_class': {
        'reference': 'field_starship_class',
        'fields': [
          'tid',
          'name'
        ]
      }
    };

    // Map filter name to Drupal field
    this.filters = {
      'class': 'field_starship_class'
    };

    this.sort = {
      'title': 'title'
    };
  }

}

module.exports = StarTrekWrapperService;
