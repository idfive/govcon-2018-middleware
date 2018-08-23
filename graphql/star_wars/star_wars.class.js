// Types: star_wars
const _ = require('lodash');
const TaxonomyTerm = require('../taxonomy_term/taxonomy_term.class');

class Star_Wars {

  constructor(data) {
    // There is no id, so set null
    this.id = null;
    this.title = data.name;
    // There is no "description", so lets craft one from other fields
    this.description = data.model + ' ship manufactured by ' + data.manufacturer;
    this.starship_class_data = data.starship_class;

  }

  starship_class() {
    // Create a "fake" taxonomy item, to match the drupal schema
    var shipClass = [
      {
        attributes: {
          name: this.starship_class_data,
          tid: null
        }
      }
    ];
    return _.map(shipClass, data => new TaxonomyTerm(data));
  }


}

module.exports = Star_Wars;
