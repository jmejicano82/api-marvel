"use strict";

const Model = require('./heroeTeam.model');

async function setTeamService(req) {
  try {
    const heroeTeamIncoming = new Model(req.body);
    const { id, team } = req.body;
    const heroeTeamFind = await Model.findOne({ id });
    let heroe;

    if (heroeTeamFind) {
      heroe = await Model.findByIdAndUpdate(heroeTeamFind._id, { team }, { new: true });
    } else {
      heroe = await heroeTeamIncoming.save();
    }
    return heroe;
  } catch (error) {
    throw error;
  }
}

module.exports = setTeamService;