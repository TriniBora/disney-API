const express = require("express");
const characterRouter = express.Router();

const characterController = require("../controllers/CharacterController");

characterRouter.get("/characters", characterController.findCharacters);
characterRouter.get("/characters/:id", characterController.findCharactersById);
characterRouter.get(
  "/characters/:name",
  characterController.findCharacterByName
);
characterRouter.get(
  "/characters/:age",
  characterController.findCharactersByAge
);
characterRouter.get(
  "/characters/:weight",
  characterController.findCharactersByWeight
);
characterRouter.get(
  "/characters/:movies",
  characterController.findCharacterMovies
);
characterRouter.post("/characters", characterController.createCharacter);
characterRouter.put("/characters/:id", characterController.updateCharacter);
characterRouter.delete("/characters/:id", characterController.deletCharacter);

module.exports = characterRouter;
