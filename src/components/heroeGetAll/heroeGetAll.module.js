"use strict";

const heroeGetAllService = require("./heroeGetAll.service");

async function heroeGetAllModule(req) {
  try {
    return await heroeGetAllService(req);
  } catch (error) {
    throw error;
  }
}

module.exports = heroeGetAllModule;
