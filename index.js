require("dotenv").config();
require("./db");
const express = require("express");

require("../controllers/matches")


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json)

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
