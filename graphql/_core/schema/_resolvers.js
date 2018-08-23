const _ = require('lodash');
const battleStarWrapperResolver = require('../../battle_star/battle_star_wrapper.resolver');
const starTrekWrapperResolver = require('../../star_trek/star_trek_wrapper.resolver');
const starWarsWrapperResolver = require('../../star_wars/star_wars_wrapper.resolver');

module.exports = _.merge(
  battleStarWrapperResolver,
  starTrekWrapperResolver,
  starWarsWrapperResolver
);
