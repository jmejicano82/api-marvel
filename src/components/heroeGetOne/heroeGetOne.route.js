"use strict";

const heroeGetOne = require("./heroeGetOne.controller");

function route(app, globalPathPrefix) {
  app.get(
    `${globalPathPrefix}/heroe/getOne/:id`,
    heroeGetOne
  );
}

module.exports = route;