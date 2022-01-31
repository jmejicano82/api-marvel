"use strict";

const heroeGetOneService = require("./heroeGetOne.service");

async function heroeGetOneModule(req) {
  try {
    return await heroeGetOneService(req);
  } catch (error) {
    throw error;
  }
}

module.exports = heroeGetOneModule;
