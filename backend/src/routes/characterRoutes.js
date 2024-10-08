/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const characterController = require("../controllers/characterController");

router.get("/", characterController.getCharacters);
router.post("/", characterController.createCharacter);

module.exports = router;
