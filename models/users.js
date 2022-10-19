const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: { type: String, unique: true, required: true} ,
    password: { type: String, required: true, select: false},
    name: { type: String },
    isActive: { type: Boolean, default: true } // should we authenticate/verify?
})

const userModel = model("User", userSchema);

module.exports = {
    userModel,
}