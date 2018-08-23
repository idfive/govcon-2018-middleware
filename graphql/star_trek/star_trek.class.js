// Types: Starship
const _ = require('lodash');
const Node = require('../_core/types/Node');
const TaxonomyTerm = require('../taxonomy_term/taxonomy_term.class');

class StarTrek extends Node {

  constructor(data, included) {
    super(data, included);

    let relationships = data.relationships;
    this._relationships = {
      starship_class: relationships.field_starship_class ? relationships.field_starship_class.data : null,
    };
  }

  starship_class() {
    return _.map(this._getIncluded('starship_class'), data => new TaxonomyTerm(data));
  }

}

module.exports = StarTrek;
