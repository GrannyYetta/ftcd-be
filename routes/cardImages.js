const express = require("express");
const { createCards, getCardImages } = require("../controllers/cardImages");

const cardImagesRouter = express.Router();

cardImagesRouter.route("/").get(getCardImages).post(createCards);


module.exports = {
  cardImagesRouter,
};
