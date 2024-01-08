const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./grapqls/typeDefs/typeDefs.js");
const resolvers = require("./grapqls/resolvers/post.js");
const db = require("./config/DB.js");
const dotenv = require("dotenv");
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

db();
const { url } = startStandaloneServer(server, {
  listen: { port: 8080 },
});

console.log(`🚀  Server ready at: ${url}`);
