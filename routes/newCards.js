const express = require("express");
const { createCard } = require("../controllers/newCard");
const newCardRouter = express.Router();

newCardRouter.route("/").post();

module.exports = {
  newCardRouter,
};
