const { model, Schema } = require('mongoose');

const heroeTeamSchema = Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    team: {
        type: String,
        require: true
    }
});

module.exports = model('heroeTeam', heroeTeamSchema);