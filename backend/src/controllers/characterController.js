/* eslint-disable no-undef */
const Character = require("../models/Character");

// Get all characters
exports.getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new character
exports.createCharacter = async (req, res) => {
  const character = new Character(req.body);
  try {
    const newCharacter = await character.save();
    res.status(201).json(newCharacter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
