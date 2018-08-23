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
const starshipSchema = require('./starship.schema');
const starshipSimpleSchema = require('./starship_simple.schema');
const battleStarWrapperSchema = require('../../battle_star/battle_star_wrapper.schema');
const starTrekWrapperSchema = require('../../star_trek/star_trek_wrapper.schema');
const starWarsWrapperSchema = require('../../star_wars/star_wars_wrapper.schema');
const allStarsWrapperSchema = require('../../all_stars/all_stars_wrapper.schema');

const RootQuery = `
  type RootQuery {
    battle_star(page: page, sort: sort): BattleStarWrapper,
    star_trek(page: page, sort: sort): StarTrekWrapper,
    star_wars(page: page, sort: sort): StarWarsWrapper,
    all_stars(page: page, sort: sort): AllStarsWrapper,
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
    starshipSimpleSchema,
    battleStarWrapperSchema,
    starTrekWrapperSchema,
    starWarsWrapperSchema,
    allStarsWrapperSchema,
    pageInput,
    paginationType
  ],
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});
