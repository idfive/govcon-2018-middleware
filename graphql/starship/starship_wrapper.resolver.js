const _ = require('lodash');
const StarshipWrapper = require('../starship/starship_wrapper.class');
const StarshipWrapperService = require('../starship/starship_wrapper.service');
const starshipWrapperService = new StarshipWrapperService();

module.exports = {
  starship: (args) => starshipWrapperService.get(args)
    .then(response => new StarshipWrapper(response.data, response.data.included || {}))
  ,
  starships: (args) => starshipWrapperService.get(args)
    .then(response => new StarshipWrapper(response.data, response.data.included || {}))
};
