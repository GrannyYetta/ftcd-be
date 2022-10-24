const { cardModel } = require("../models/cardImages");

const createCards = async (req, res, next) => {
  try {
    const { body } = req;
    const memCard = await cardModel.create(body);
    res.json(memCard);
  } catch (error) {
    next(error.message);
  }
};

const getCardImages = async (req, res, next) => {
  try {
    const cards = await cardModel.find({});
    res.json(cards);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getCardImages,
  createCards,
};
