const { cardModel } = require("../models/cardImages");
const { questionModel } = require("../models/reflectQuestions");

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
    const level = +req.query.level || 12;
    const query = { principle: { $lte: level } };
    const cards = await cardModel.find(query);
    res.json(cards);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const displayCardImages = async (req, res, next) => {
  try {
    const cards = await cardModel.find({});
    const questions = await questionModel.find({});
    res.json({ cards, questions });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getCardImages,
  createCards,
  displayCardImages,
};
