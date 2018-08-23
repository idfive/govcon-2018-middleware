const _ = require('lodash');
const BattleStarWrapper = require('./battle_star_wrapper.class');
const BattleStarService = require('../_core/services/service.d8');
const battleStarService = new BattleStarService();

module.exports = {
  battle_star: (args) => battleStarService.get(args)
    .then(response => new BattleStarWrapper(response.data, response.data.included || {}))
};
