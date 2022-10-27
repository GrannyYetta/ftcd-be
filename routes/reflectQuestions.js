const express = require("express");
const {
  createQuestions,
  getQuestions,
} = require("../controllers/reflectQuestions");

const questionImagesRouter = express.Router();

questionImagesRouter.route("/").get(getQuestions).post(createQuestions);

module.exports = {
  questionImagesRouter,
};
