const _ = require('lodash');
const AllStarsWrapper = require('./all_stars_wrapper.class');
const AllStarsWrapperService = require('./all_stars_wrapper.service');
const allStarsWrapperService = new AllStarsWrapperService();

module.exports = {
  all_stars: (args) => allStarsWrapperService.get()
    .then(response => new AllStarsWrapper(response.data || {}))
};
