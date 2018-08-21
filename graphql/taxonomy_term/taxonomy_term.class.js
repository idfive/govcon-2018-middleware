class TaxonomyTerm {

  constructor(data) {
    this.name = data.attributes.name;
    this.tid = data.attributes.tid;

    // Relationships
    let relationships = data.relationships;
    this._relationships = {};
  }

}

module.exports = TaxonomyTerm;
