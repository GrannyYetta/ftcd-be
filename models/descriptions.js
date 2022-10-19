const { Schema, model } = require("mongoose");

const descriptionSchema = new Schema({
  id: { type: Number },
});

const descriptionModel = model("Description", descriptionSchema);

module.exports = {
  descriptionModel,
};
