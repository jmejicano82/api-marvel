"use strict";

const heroeGetAllModule = require("./heroeGetAll.module");

async function heroeGetAllController(req, res) {
  const rsp = await heroeGetAllModule(req);
  return res.status(200).send(rsp);
}

module.exports = heroeGetAllController;