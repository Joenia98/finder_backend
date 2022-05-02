const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./graphql/typeDef");
const { resolvers } = require("./graphql/resolvers");
//Integracion de la base de datos
const { connectDB } = require("./db");
const cors = require('cors')

const app = express();
connectDB();

module.exports = app;

app.get("/", (req, res) => res.send("Welcome to my api"));

async function start() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });
  app.use(cors());
  app.use("*", (req, res) => res.status(404).send("Not Found"));

  app.listen(3002, () => {
    console.log("Server on port", 3002);
  });
}
start();
