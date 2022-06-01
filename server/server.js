const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const PORT = process.env.PORT || 3001;
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const path = require("path");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};
startApolloServer(typeDefs, resolvers);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "src", "index.js"));
});
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
