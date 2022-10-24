const express = require("express");
const { createMatch } = require("../controllers/matches");

const matchesRouter = express.Router();

matchesRouter.route("/").post(createMatch)


module.exports = {
  matchesRouter,
};
