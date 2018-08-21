var _ = require('lodash');
var axios = require('axios');
const moment = require('node-moment');

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
   * Specific for taxonomy terms, as we need to modify endpoint per vocabulary filter, and ignore vocabularyfilter in the filter build.
   */
  getTaxonomy(args) {
    var vid = args.filter.vocabulary;
    delete args.filter;
    var queryStr = this.buildQuery(args);
    return axios.get(this.baseUrl + this.endpoint + vid + queryStr);
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
      // ID
      if (args.id) {
        queryParts.push('filter[item-id][condition][path]=uuid&filter[item-id][condition][value]=' + args.id);
      }

      // Pagination
      if (args.page) {
        queryParts.push(_.map(args.page, (value, key) => 'page[' + key + ']=' + value).join('&'));
      }

      // Sort
      if (args.sort && args.sort.field && this.sort[args.sort.field]) {
        let direction = (args.sort.direction.toUpperCase() == 'DESC') ? '-' : '';
        queryParts.push('sort=' + direction + this.sort[args.sort.field]);
      }

      // Filters
      if (!_.isEmpty(args.filter)) {

        var filters = [];
        for (var key in args.filter) {
          if(args.filter[key] == true) {
            args.filter[key] = 1;
          }
          if(args.filter[key] == false) {
            args.filter[key] = 0;
          }
          var _this = this;

          for (var subkey in args.filter[key]) {
            var filter = 'filter[' + _this.filters[key] + '_filter][value][]=' + args.filter[key][subkey];
            filters.push(filter);
          }
          var filter_path = 'filter[' + _this.filters[key] + '_filter][path]=' + _this.filters[key];
          filters.push(filter_path);
          var filter_operator = 'filter[' + _this.filters[key] + '_filter][operator]=IN';
          filters.push(filter_operator);

        }
        var filterString = filters.join('&');
        queryParts.push(filterString);
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
