const starshipFilter = `
  input starshipFilter {
    promote: Boolean
    location: [Int]
    type: [Int]
    initiative: [Int]
    topic: [Int]
    school: [Int]
    message_area: [Int]
    section: [Int]
  }
`;

module.exports = starshipFilter;
