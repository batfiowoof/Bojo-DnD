/* eslint-disable no-undef */
const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: String,
  level: Number,
  hitPoints: Number,
  image: String,
  attributes: {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
  },
  equipment: [String],
});

module.exports = mongoose.model("Character", characterSchema);
