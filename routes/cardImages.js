const express = require("express");
const {
  createCards,
  getCardImages,
  displayCardImages,
} = require("../controllers/cardImages");

const cardImagesRouter = express.Router();

cardImagesRouter.route("/").get(getCardImages).post(createCards);

cardImagesRouter.route("/display").get(displayCardImages);

module.exports = {
  cardImagesRouter,
};
