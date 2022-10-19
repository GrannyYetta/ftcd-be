const { Schema, model } = require("mongoose");

const createYourOwnCardSchema = new Schema({
  principleText: { type: String, required: true },
  descriptionText: { type: String, required: true },
});

const createYourOwnCardModel = model(
  "Create your own Card",
  createYourOwnCardSchema
);

module.exports = {
  createYourOwnCardModel,
};
