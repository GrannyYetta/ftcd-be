const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  principle: { type: String },
  principleImg: { type: String },
  descriptionImg: { type: String },
});

const cardModel = model("Card", cardSchema);

module.exports = {
  cardModel,
};
