require("dotenv").config();
require("./db");
const express = require("express");
const { cardImagesRouter } = require("./routes/cardImages");

require("../controllers/cardImages");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json);

app.use("/cardImages", cardImagesRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
