const Starship = `
  type Starship implements Node {
    id: String
    nid: ID
    title: String
    body: String
    starship_class: [TaxonomyTerm]
  }
`;

module.exports = Starship;
