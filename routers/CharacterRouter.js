const express = require("express");
const characterRouter = express.Router();

const characterController = require("../controllers/CharacterController");

const auth = require("../midlewares/auth");

characterRouter.get("/characters", auth, characterController.findCharacters);
characterRouter.get(
  "/characters/:id",
  auth,
  characterController.findCharacterById
);
characterRouter.post("/characters", auth, characterController.createCharacter);
characterRouter.put(
  "/characters/:id",
  auth,
  characterController.updateCharacter
);
characterRouter.delete(
  "/characters/:id",
  auth,
  characterController.deleteCharacter
);

module.exports = characterRouter;
