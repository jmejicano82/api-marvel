"use strict";

const http = require("axios");
const { api } = require("../../config/global");
const crypto = require('crypto');

async function heroeGetOneService(req) {

  try {
    const hash = crypto.createHash('md5').update("1" + api.private_key + api.public_key).digest('hex');
    const url = `${api.url}characters?ts=1&apikey=${api.public_key}&hash=${hash}&id=${req.params.id}`;
    const { data } = await http.get(url);

    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = heroeGetOneService;
