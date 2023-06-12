require("dotenv").config(); //connecting the file that has the URL for the databas
require("./db"); // connecting the mongodb object modeling

const cors = require("cors"); // Cross-Origin Resource Sharing --> secure requests and data transfers between servers and browsers
const express = require("express"); // web framework for nodeJS

/////////WEBSOCKETS/////////
const { Server } = require("socket.io"); // ???not sure if this is correctly adapted???
///////////////////////////

const { cardImagesRouter } = require("./routes/cardImages");
const { newCardRouter } = require("./routes/newCards"); // currently disabled due to feasibility
const { matchesRouter } = require("./routes/matches");
const { questionImagesRouter } = require("./routes/reflectQuestions");

const { errorHandler } = require("./middelwares/errorHandler");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/cardimages", cardImagesRouter);

// app.use("/newcard", newCardRouter); // currently disabled due to feasibility

// app.use("/matches", matchesRouter); // currently disabled due to feasibility

app.use("/questions", questionImagesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Online Game for the Feminist Tech Card Deck");
});

app.use("/error", (req, res, next) => {
  next(new Error("this is the error message"));
});

app.use(errorHandler);

/////////WEBSOCKETS/////////
const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);
/* Socket.io server */
const io = new Server(server, { cors: "*" });

io.on("connection", (socket) => {
  // Join user to game room on connection
  console.log("connected");
  const gameRoom = io.sockets.adapter.rooms.get(socket.request._query.roomId);
  if (!gameRoom) {
    socket.join(socket.request._query.roomId);
    socket.emit("waiting-opponent", true);
  } else if (gameRoom.size === 1) {
    socket.join(socket.request._query.roomId);
    const playerWithTurn = [...gameRoom][
      Math.floor(Math.random() * gameRoom.size)
    ]; //turns
    console.log(playerWithTurn);
    io.to(socket.request._query.roomId).emit("set-turn", playerWithTurn);
  } else {
    socket.emit("error", "Cannot join. 2 users playing in the room");
  }

  // Listen to user moves
  socket.on("move", (arg) => {
    io.to(socket.request._query.roomId).emit("notify-move", socket.id);
  });
});
////////////////////////////
