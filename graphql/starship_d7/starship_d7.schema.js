const Starship_D7 = `
  type Starship_D7 implements Node {
    id: ID
    title: String
    body: String
    starship_class: [TaxonomyTerm]
  }
`;

module.exports = Starship_D7;
