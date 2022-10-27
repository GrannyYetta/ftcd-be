const { questionModel } = require("../models/reflectQuestions")

const createQuestions = async (req, res, next) => {
    try {
        const { body } = req;
        const questionCard = await questionModel.create(body);
        res.json(questionCard)
    } catch (error) {
        next(error.message)
    }
}

const getQuestions = async (res, req, next) => {
    try {
        const cardPop = await questionModel.find({})
        res.json(cards)
        catch (error) {
            res.json({message: error.message})
        }
    }
}

module.exports = {
    createQuestions,
getQuestions,}