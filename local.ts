const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./src/type-defs');
const { resolvers } = require('./src/resolvers');

const server = new ApolloServer(
  {
    typeDefs,
    resolvers: resolvers as any,
  }
)

server
  .listen({ port: process.env.PORT || 4000 })
  .then(() => {
    console.log(`graphQL running at `);
  });
