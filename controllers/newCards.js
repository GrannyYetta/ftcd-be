const { NewCard } = require("../models/newCards");

const createCard = async (req, res, next) => {
  try {
    const { newCard } = req;
    const newCard = await NewCard.create(newPrinciple);
    res.json(newCard);
  } catch (error) {
    res.json({ message: error.message });
  }
};


