const express = require("express");
const { createCard, addedCard } = require("../controllers/newCard");

const newCardRouter = express.Router();

newCardRouter.route("/").get(createCard).post(addedCard);

module.exports = {
  newCardRouter,
};
