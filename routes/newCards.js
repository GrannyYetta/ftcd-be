const express = require("express");
const { newCard } = require("../controllers/newCard");

const newCardRouter = express.Router();

newCardRouter.route("/createyourowncard").post(newCard);

module.exports = {
  newCardRouter,
};
