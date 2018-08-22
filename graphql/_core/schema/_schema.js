const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const _ = require('lodash');

// Enums
const directionEnum = require('./enum.direction');

// Inputs
const pageInput = require('../../_core/schema/input.page');
const sortInput = require('../../_core/schema/input.sort');

// Interfaces
const nodeInterface = require('../../_core/schema/interface.node');

// Types
const paginationType = require('../../_core/schema/type.pagination');

// Schemas
const taxonomyTermSchema = require('../../taxonomy_term/taxonomy_term.schema');
const taxonomyTermWrapperSchema = require('../../taxonomy_term/taxonomy_term_wrapper.schema');
const starshipSchema = require('../../starship/starship.schema');
const starshipWrapperSchema = require('../../starship/starship_wrapper.schema');
const starshipD7Schema = require('../../starship_d7/starship_d7.schema');
const starshipD7WrapperSchema = require('../../starship_d7/starship_d7_wrapper.schema');

const RootQuery = `
  type RootQuery {
    starship(id: String!): StarshipWrapper,
    starships(page: page, sort: sort): StarshipWrapper,
    starship_d7(id: String!): StarshipD7Wrapper,
    starships_d7(page: page, sort: sort): StarshipD7Wrapper,
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    nodeInterface,
    taxonomyTermSchema,
    taxonomyTermWrapperSchema,
    directionEnum,
    sortInput,
    starshipSchema,
    starshipWrapperSchema,
    starshipD7Schema,
    starshipD7WrapperSchema,
    pageInput,
    paginationType
  ],
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});
