const { matchModel } = require("../models/matches");

// CREATE
const createMatch = async (req, res, next) => {
  try {
    const { body } = req;
    const match = await matchModel.create(body);
    res.json(match);
  } catch (err) {
    res.json({ message: error.message });
  }
};

// READ

// const getMatch = async (req, res, next) => {
//   try {
//     const matchStats = await matchModel.find({});
//     res.json(matchStats);
//   } catch (err) {
//     res.json({ message: error.message });
//   }
// };

// // UPDATE

// const updateMatch = async (req, res, next) => {};

// // DELETE

// const deleteMatch = async (req, res, next) => {};

module.exports = {
  createMatch,
  //   getMatch,
};
