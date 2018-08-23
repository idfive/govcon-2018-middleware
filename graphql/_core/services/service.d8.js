var _ = require('lodash');
var axios = require('axios');

class Service {

  constructor() {
    this.baseUrl = 'http://dev-govcon-2018-starships-d8.pantheonsite.io/jsonapi';
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
        queryParts.push(_.map(args.page, (value, key) => 'page[' + key + ']=' + value).join('&'));
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
