"use strict";

const heroeTeamModule = require("./heroeTeam.module");

async function heroeTeamController(req, res) {
  const rsp = await heroeTeamModule(req);
  return res.status(200).send(rsp);
}

module.exports = heroeTeamController;