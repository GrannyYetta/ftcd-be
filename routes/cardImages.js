const express = require("express");
const { getOneCardImage, getCardImages } = require("../controllers/cardImages");

const cardImagesRouter = express.Router();

cardImagesRouter.route("/:id").get;

module.exports = {
  cardImagesRouter,
};
