// Types: star_wars
const _ = require('lodash');

class Star_Wars {

  constructor(data) {

    this.title = data.name;
    this.body = null;
    this.starship_class = data.starship_class;

  }

}

module.exports = Star_Wars;
