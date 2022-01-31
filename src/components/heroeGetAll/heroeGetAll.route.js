"use strict";

const heroeGetAll = require("./heroeGetAll.controller");

function route(app, globalPathPrefix) {
 
  app.get(
    `${globalPathPrefix}/heroe/getAll/:offset/:nameStartsWith?`,
    heroeGetAll
  );
}

module.exports = route;