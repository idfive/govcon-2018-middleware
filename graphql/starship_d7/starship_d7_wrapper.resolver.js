const _ = require('lodash');
const StarshipD7Wrapper = require('../starship_d7/starship_d7_wrapper.class');
const StarshipD7WrapperService = require('../starship_d7/starship_d7_wrapper.service');
const starshipD7WrapperService = new StarshipD7WrapperService();

module.exports = {
  starship_d7: (args) => starshipD7WrapperService.get(args)
    .then(response => new StarshipD7Wrapper(response.data, response.data.included || {}))
  ,
  starships_d7: (args) => starshipD7WrapperService.get(args)
    .then(response => new StarshipD7Wrapper(response.data, response.data.included || {}))
};
