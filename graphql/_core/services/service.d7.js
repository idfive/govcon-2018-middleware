var _ = require('lodash');
var axios = require('axios');

class Service {

  constructor() {
    this.baseUrl = 'http://dev-govcon-2018-starships-d7.pantheonsite.io/api';

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

  /**
   *
   * @param {*} queryStr
   */
  get(args) {
    var queryStr = this.buildQuery(args);
    return axios.get(this.baseUrl + this.endpoint + queryStr);
  }

  /**
   * Builds a query from arguments and relationships
   * @param {*} args
   */
  buildQuery(args) {
    var queryParts = [];
    var relationships = this.includeRelationships();

    // Add args
    if (!_.isEmpty(args)) {

      // Pagination
      if (args.page) {
        queryParts.push(_.map(args.page, (value, key) => {
          if (key === 'limit') key = 'range';
          if (key === 'offset') {
            key = 'page';
            if (value > 0) {
              value = value + 1;
            } else {
              return false;
            }
          }
          return key + '=' + value;
        }).join('&'));
      }

      // Sort
      if (args.sort && args.sort.field && this.sort[args.sort.field]) {
        let direction = (args.sort.direction.toUpperCase() == 'DESC') ? '-' : '';
        queryParts.push('sort=' + direction + this.sort[args.sort.field]);
      }
    }

    // Add relationships
    if (!_.isEmpty(relationships)) {
      queryParts.push(_.map(relationships, value => value).join('&'));
    }

    // Return query str
    return '?' + queryParts.join('&');
  }

  /**
   * Builds an entity relationship query
   */
  includeRelationships() {
    if(!_.isEmpty(this.relationships)) {
      return {
        'include': "include=" + _.map(this.relationships, (value, key) => key).join(','),
        'fields': _.map(_.filter(this.relationships, item => !_.isEmpty(item)), (value, key) => value.reference ? 'fields[' + value.reference + ']=' + value.fields : '').join('&')
      };
    } else {
      return;
    }
  }

}

module.exports = Service;
