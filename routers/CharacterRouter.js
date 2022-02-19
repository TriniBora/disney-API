const express = require("express");
const characterRouter = express.Router();

const characterController = require("../controllers/CharacterController");

characterRouter.get("/characters", characterController.findCharacters);
characterRouter.get("/characters/:id", characterController.findCharacterById);
characterRouter.post("/characters", characterController.createCharacter);
characterRouter.put("/characters/:id", characterController.updateCharacter);
characterRouter.delete("/characters/:id", characterController.deleteCharacter);

module.exports = characterRouter;
