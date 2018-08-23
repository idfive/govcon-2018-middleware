const Starship = `
  type Starship implements Node {
    id: ID
    title: String
    description: String
    starship_class: [TaxonomyTerm]
  }
`;

module.exports = Starship;
