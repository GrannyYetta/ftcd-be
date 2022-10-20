const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  principle: { String },
  principleImg: { String },
  descriptionImg: { String },
});

const cardModel = model("Card", cardSchema);

module.exports = {
  cardModel,
};
