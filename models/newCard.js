const { Schema, model } = require("mongoose");

const newCardSchema = new Schema({
  principleText: { type: String, required: true },
  descriptionText: { type: String, required: true },
  questionText: { type: String, required: false },
  author: { type: String, required: true },
});

const newCardModel = model("Create your own Card", newCardSchema);

module.exports = {
  newCardModel,
};
