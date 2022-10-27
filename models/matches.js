const { Schema, model } = require("mongoose");

const matchSchema = new Schema({
  difficultyLevel: { type: Number },
  score: { type: String },
  NrOfPlayers: { type: Number },
  turns: { type: Number },
  matchCompleted: { type: Boolean },
});

const matchModel = model("Match", matchSchema);

module.exports = {
  matchModel,
};
