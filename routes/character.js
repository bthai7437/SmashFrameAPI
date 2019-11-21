const express = require("express");
const characterController = require("../controllers/character");
const router = express.Router();

router.get("/character", characterController.getCharacters);
router.post("/add-character", characterController.postCharacter);

module.exports = router;
