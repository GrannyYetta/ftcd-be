const { newCardModel } = require("../models/newCard");

const createCard = async (req, res, next) => {
  try {
    const { cardCover } = req;
    const addedCard = await newCardModel.create(cardCover);
    res.json(addedCard);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const newCard = async (req, res, next) => {
  try {
    const newbie = await newCardModel.find({});
    res.json(newbie);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createCard,
  newCard,
};
