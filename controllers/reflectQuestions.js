const { questionModel } = require("../models/reflectQuestions");

const createQuestions = async (req, res, next) => {
  try {
    const { body } = req;
    const questionCard = await questionModel.create(body);
    res.json(questionCard);
  } catch (error) {
    next(error.message);
  }
};

const getQuestions = async (req, res, next) => {
  try {
    const cardPop = await questionModel.find({});
    res.json(cardPop);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createQuestions,
  getQuestions,
};
