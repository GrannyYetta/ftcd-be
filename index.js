require("dotenv").config();
require("./db");

const cors = require("cors");
const express = require("express");
const { cardImagesRouter } = require("./routes/cardImages");
const { newCardRouter } = require("./routes/newCards");
const { matchesRouter } = require("./routes/matches");

const { errorHandler } = require("./middelwares/errorHandler");
const { questionImagesRouter } = require("./routes/reflectQuestions");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/cardimages", cardImagesRouter);

app.use("/newcard", newCardRouter);

app.use("/matches", matchesRouter);

app.use("./questions", questionImagesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Online Game for the Feminist Tech Card Deck");
});

app.use("/error", (req, res, next) => {
  next(new Error("this is the error message"));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
