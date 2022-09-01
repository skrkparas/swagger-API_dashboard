const Router = require("express").Router();
const { homeC } = require("../controller/testing.controller");
const swaggerUI = require("swagger-ui-express");
const yaml = require("yamljs");
const swaggerDocs  = require("../swaggerdoc");
const swaggerDocsyaml = yaml.load("./api.yaml");

Router.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs)
);
var sample = "asdasdasd";
exports.sample = sample;
module.exports = Router;
