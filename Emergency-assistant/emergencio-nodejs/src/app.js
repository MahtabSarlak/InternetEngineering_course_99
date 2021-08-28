const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("./util/logger");
const schema = require("./schema/schema");
const Forms = require("./resolvers/forms-resolver");
const Areas = require("./resolvers/areas-resolver");
const axios = require("axios");
var path = require("path");
const jwtDecode = require("jwt-decode");
const Roles = require("./resolvers/roles-resolver");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;

const {
  port,
  mongo_password,
  mongo_user,
  mongo_db,
} = require("./config/config");

const app = express();

const context = (req) => {
  const { authorization: token } = req.headers;
  return { token, email: jwtDecode(token)["https://emergencio/email"] };
};

const resolvers = {
  createForm: Forms.createForm,
  createFilledForm: Forms.createFilledForm,
  createArea: Areas.createArea,
  createRole: Roles.createRole,

  getFormById: Forms.getFormById,
  getFilledFormById: Forms.getFilledFormById,
  getAreaById: Areas.getAreaById,
  getRoleById: Roles.getRoleById,

  getAllFilledForms: Forms.getAllFilledForms,
  getAllEmptyForms: Forms.getAllEmptyForms,
  getAllAreas: Areas.getAllAreas,
  getAllRoles: Roles.getAllRoles,

  getAreaByPoint: Areas.getAreaByPoint,
  getRoleByUserName: Roles.getRoleByUserName,
};
app.use(express.static(path.join(__dirname, "build")));
app.use(
  "/graphql",
  cors(),
  graphqlHTTP(async (req) => ({
    schema,
    rootValue: resolvers,
    context: () => context(req),
    graphiql: true,
  }))
);
console.log(
  `mongodb+srv://${mongo_user}:${mongo_password}@testcluster.pzhlj.mongodb.net/${mongo_db}?retryWrites=true&w=majority`
);
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
mongoose
  .connect(
    `mongodb+srv://${mongo_user}:${mongo_password}@testcluster.pzhlj.mongodb.net/${mongo_db}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port);
    process.on("SIGINT", () => {
      logger.logger.info({ message: "Stopping the server" });
      process.exit();
    });
  })
  .catch((err) => {
    logger.logger.error(err);
  });

console.log(`Listening to graphql at: \"http://localhost:${port}/graphql\"...`);
