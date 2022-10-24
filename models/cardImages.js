const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  principle: { type: String },
  type: { type: String },
  image: { type: String },
});

const cardModel = model("Card", cardSchema);

module.exports = {
  cardModel,
};
