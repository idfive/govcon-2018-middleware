class VocabularyTerm {

  constructor(data) {
    this.name = data.attributes.name;
    this.vid = data.attributes.vid;
    this.description = data.attributes.description;

    // Relationships
    let relationships = data.relationships;
    this._relationships = {};
  }

}

module.exports = VocabularyTerm;
