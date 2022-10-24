const { newCardModel } = require("../models/newCard");

const createCard = async (req, res, next) => {
  try {
    const newCard = req;
    const addedCard = await newCardModel.create(newCard);
    res.json(addedCard);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// const addedCard = async (req, res, next) => {
//   try {
//     const newbie = await newCardModel.find({});
//     res.json(newbie);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

const addedCard = async (req, res, next) => {
  try {
    const newbie = await newCardModel.find({});
    res.json(newbie);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createCard,
  addedCard,
};
