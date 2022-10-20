const { NewCard } = require("../models/addedCards");

const createCard = async (req, res, next) => {
  try {
    const { newPrinciple } = req;
    const newCard = await NewCard.create(newPrinciple);
    res.json(newPrinciple);
  } catch (error) {
    res.json({ message: error.message });
  }
};
