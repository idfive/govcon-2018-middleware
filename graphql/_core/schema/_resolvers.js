const _ = require('lodash');
const starshipWrapperResolver = require('../../starship/starship_wrapper.resolver');
const starshipD7WrapperResolver = require('../../starship_d7/starship_d7_wrapper.resolver');

module.exports = _.merge(
  starshipWrapperResolver,
  starshipD7WrapperResolver
);
