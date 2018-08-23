const _ = require('lodash');
const StarWarsWrapper = require('../star_wars/star_wars_wrapper.class');
const StarWarsService = require('../_core/services/service.swapi');
const starWarsService = new StarWarsService();

module.exports = {
  star_wars: (args) => starWarsService.get(args)
    .then(response => new StarWarsWrapper(response.data))
};
