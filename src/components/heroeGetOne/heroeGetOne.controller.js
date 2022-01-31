"use strict";

const heroeGetOneModule = require("./heroeGetOne.module");

async function heroeGetOneController(req, res) {
  const rsp = await heroeGetOneModule(req);
  return res.status(200).send(rsp);
}

module.exports = heroeGetOneController;