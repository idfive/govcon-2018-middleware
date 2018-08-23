// Types: Starship
const _ = require('lodash');

class AllStars {

  constructor(data) {
    if(data.attributes) {
      this.title = data.attributes.title;
    } else {
      this.title = data.name;
    }
  }

}

module.exports = AllStars;
