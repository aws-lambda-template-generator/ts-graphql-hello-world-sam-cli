import { ApolloServer } from 'apollo-server-lambda';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const apolloServer = new ApolloServer({ resolvers, typeDefs });

const graphqlHandler = apolloServer.createHandler();

export { graphqlHandler };
