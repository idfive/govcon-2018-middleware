const _ = require('lodash');
const StarWarsWrapper = require('../star_wars/star_wars_wrapper.class');
const StarWarsWrapperService = require('../star_wars/star_wars_wrapper.service');
const starwarsWrapperService = new StarWarsWrapperService();

module.exports = {
  star_wars: (args) => starwarsWrapperService.get(args)
    .then(response => new StarWarsWrapper(response.data))
};
