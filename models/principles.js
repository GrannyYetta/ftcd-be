const { Schema, model } = require("mongoose");

const principleSchema = new Schema({
  id: { type: Number },
});

const principleModel = model("Principle", principleSchema);

module.exports = {
  principleModel,
};
