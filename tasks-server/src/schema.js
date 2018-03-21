const GraphQLToolsSequelize = require('graphql-tools-sequelize');
const GraphQLToolsTypes = require('graphql-tools-types');
const { db } = require('./seqdatabase');

const gts = new GraphQLToolsSequelize(db);
gts.boot();

const definition = `
  schema {
    query: Root
    Mutation: Root
  }

  type Root {
    ${gts.entityQuerySchema("Root", "", "Project")}
    ${gts.entityQuerySchema("Root", "", "Project*")}
  }

  type Project {
    id: ID!
    name: String!
    ${gts.entityCloneSchema("Project")}
    ${gts.entityCreateSchema("Project")}
    ${gts.entityUpdateSchema("Project")}
    ${gts.entityDeleteSchema("Project")}
  }
`;

const resolvers = {
  Root: {
    Project: gts.entityQueryResolver("Root", "", "Project"),
    Projects: gts.entityQueryResolver("Root", "", "Project*")
  },
  Project: {
    clone: gts.entityQueryResolver("Project"),
    create: gts.entityQueryResolver("Project"),
    update: gts.entityQueryResolver("Project"),
    delete: gts.entityQueryResolver("Project")
  }
};

module.exports = { definition, resolvers }