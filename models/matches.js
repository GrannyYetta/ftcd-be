const { Schema, model } = require("mongoose");

const matchSchema = new Schema({
  score: { type: Number },
  NrOfPlayers: { type: Number }, // should this be an array?
  turns: { type: Number },
  matchCompleted: { type: Boolean },
});

const matchModel = model("Match", matchSchema);

module.exports = {
  matchModel,
};
