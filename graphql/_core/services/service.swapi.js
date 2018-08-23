var _ = require('lodash');
var axios = require('axios');

class Service {

  constructor() {
    this.baseUrl = 'https://swapi.co/api';
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

    // Return query str
    return '?' + queryParts.join('&');
  }
}

module.exports = Service;
