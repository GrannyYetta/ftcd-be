const { NewCard } = require("../models/newCard");

const createCard = async (req, res, next) => {
  try {
    const { newPrinciple } = req;
    const addedCard = await NewCard.create(newPrinciple);
    res.json(addedCard);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createCard,
};
