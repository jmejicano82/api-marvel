"use strict";

const heroeTeam = require("./heroeTeam.controller");

function route(app, globalPathPrefix) {
  console.log("route heroe team");
  app.post(
    `${globalPathPrefix}/heroe/team`,
    heroeTeam
  );
}

module.exports = route;