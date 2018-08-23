const Service = require('../_core/services/service.d8');

class BattleStarWrapperService extends Service {

  constructor() {
    super();

    this.endpoint = '/node/starship';

    // Map relationships
    this.relationships = {
      'field_starship_class': {
        'reference': 'taxonomy_term--starship_class',
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

module.exports = BattleStarWrapperService;
