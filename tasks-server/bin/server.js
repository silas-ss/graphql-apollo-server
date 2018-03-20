const app = require('../src/app');

const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { ApolloEngine } = require('apollo-engine');
const cors = require('cors');

const typeDefs = require('../src/typedefs');
const query = require('../src/query');
const mutation = require('../src/mutation');

const resolvers = {
  Query: query,
  Mutation: mutation
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ 
  schema,
  tracing: true,
  cacheControl: true
}));

const engine = new ApolloEngine({
  apiKey: 'service:silas-ss-1884:mFUeBSZcMRnRcxBBLDvTlQ'
});

engine.listen({
  port: 8080,
  expressApp: app
});