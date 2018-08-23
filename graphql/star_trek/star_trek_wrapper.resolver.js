const _ = require('lodash');
const StarTrekWrapper = require('../star_trek/star_trek_wrapper.class');
const StarTrekWrapperService = require('../star_trek/star_trek_wrapper.service');
const starTrekWrapperService = new StarTrekWrapperService();

module.exports = {
  star_trek: (args) => starTrekWrapperService.get(args)
    .then(response => new StarTrekWrapper(response.data, response.data.included || {}))
};
