require("dotenv").config();
require("./db");
const express = require("express");
const { cardImagesRouter } = require("./routes/cardImages");
const { newCardRouter } = require("./routes/newCards");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/cardImages", cardImagesRouter);

app.use("/newCard", newCardRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
