const _ = require('lodash');
const BattleStarWrapper = require('../battle_star/battle_star_wrapper.class');
const BattleStarWrapperService = require('../battle_star/battle_star_wrapper.service');
const battleStarWrapperService = new BattleStarWrapperService();

module.exports = {
  battle_star: (args) => battleStarWrapperService.get(args)
    .then(response => new BattleStarWrapper(response.data, response.data.included || {}))
};
