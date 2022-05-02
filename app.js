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
  app.set('port',process.env.PORT || 3002)
  app.use("*", (req, res) => res.status(404).send("Not Found"));

  app.listen(app.get('port'), () => {
    console.log("Server on port:", app.get('port'));
  });
}
start();
