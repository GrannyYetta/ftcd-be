const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  principle: { type: Number },
  image: { type: String },
});

const questionModel = model("Question", questionSchema);

module.exports = {
  questionModel,
};
