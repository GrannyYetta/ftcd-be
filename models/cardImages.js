const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  principle: { type: Number },
  type: { type: String },
  image: { type: String },
});

const cardModel = model("Card", cardSchema);

module.exports = {
  cardModel,
};
