const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./src/type-defs');
const { resolvers } = require('./src/resolvers');

const server = new ApolloServer(
  {
    typeDefs,
    resolvers: resolvers,
  }
);

server
  // eslint-disable-next-line no-undef
  .listen({ port: process.env.PORT || 4000 })
  .then(() => {
    console.log('graphQL running at localhost:4000');
  });
