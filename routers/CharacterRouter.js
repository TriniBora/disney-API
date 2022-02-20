const express = require("express");
const characterRouter = express.Router();

const characterController = require("../controllers/CharacterController");

const auth = require("../midlewares/auth");

// API endpoint to get all characters or those filtered by query parameters
characterRouter.get("/characters", auth, characterController.findCharacters);
// API endpoint to get a character by ID, passed in as a URL parameter
characterRouter.get(
  "/characters/:id",
  auth,
  characterController.findCharacterById
);
// API endpoint to create a character
characterRouter.post("/characters", auth, characterController.createCharacter);
// API endpoint to update a character by ID, passed in as a URL parameter
characterRouter.put(
  "/characters/:id",
  auth,
  characterController.updateCharacter
);
// API endpoint to delete a character by ID, passed in as a URL parameter
characterRouter.delete(
  "/characters/:id",
  auth,
  characterController.deleteCharacter
);

module.exports = characterRouter;
