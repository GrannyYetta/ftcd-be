const { cardModel } = require("../models/cardImages");

const getOneCardImage = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const cardImage = await cardModel.findById(id);
    res.json(cardImage);
  } catch (error) {
    res.json({ message: error.message });
  }
};

console.log(getOneCardImage);

const getCardImages = async (req, res, next) => {
  try {
    const cards = await cardModel.find({});
    res.json(cards);
  } catch (error) {
    res.json({ message: error.message });
  }
};

console.log(getCardsImages);

module.exports = {
  getOneCardImage,
  getCardImages,
};
