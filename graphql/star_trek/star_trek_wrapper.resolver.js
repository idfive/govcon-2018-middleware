const _ = require('lodash');
const StarTrekWrapper = require('../star_trek/star_trek_wrapper.class');
const StarTrekService = require('../_core/services/service.d7');
const starTrekService = new StarTrekService();

module.exports = {
  star_trek: (args) => starTrekService.get(args)
    .then(response => new StarTrekWrapper(response.data, response.data.included || {}))
};
