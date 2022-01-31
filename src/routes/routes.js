"use strict";
const config = require("../config/global");
const globalPathPrefix = config.get("globalPathPrefix");
const healthcheckRoute = require("../components/healthcheck/healthcheck.route");
const trace = require("@bech/trace");
const httpContext = require("@bech/express-http-context");
const errorHandler = require("../util/errorHandler.service");

const heroeGetAllRoute = require("../components/heroeGetAll/heroeGetAll.route");
const heroeGetOneRoute = require("../components/heroeGetOne/heroeGetOne.route");

function routes(app) {
  
  // Rutas para cada operación
  heroeGetAllRoute(app, globalPathPrefix);
  heroeGetOneRoute(app, globalPathPrefix);

  // Middleware para manejo de errores
  app.use(errorHandler);

}

module.exports = { routes };
