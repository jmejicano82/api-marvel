"use strict";

const heroeTeamService = require("./heroeTeam.service");

async function heroeTeamModule(req) {
  try {
    return await heroeTeamService(req);
  } catch (error) {
    throw error;
  }
}

module.exports = heroeTeamModule;
