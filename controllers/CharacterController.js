const characterService = require("../services/CharacterService");
const { response, errorResponse } = require("../utils/response");

// This function is used to find all characters, filtering by name, age, weight or movie id in case of query parameters
const findCharacters = async (req, res) => {
  try {
    const queryKeys = Object.keys(req.query);
    // Only allowed to filter characters by name, age, weight and movie id.
    // If any other query parameter is passed, an error message is returned
    if (
      queryKeys.every((key) =>
        ["name", "age", "weight", "movies"].includes(key)
      )
    ) {
      const characters = await characterService.findCharactersService(
        req.query
      );
      const msg = `${
        characters.length > 0
          ? "Characters retrieved successfully."
          : "There is no characters in the database that match with the query."
      }`;
      response(200, characters, res, msg);
    } else {
      response(
        400,
        null,
        res,
        "Only characters filtered by name, age, weight or movie id are allowed."
      );
    }
  } catch (error) {
    errorResponse(error, res, "Error finding the characters");
  }
};

// This function is used to find a character by ID, passed in as a URL parameter
// If the character is not found, an error message is returned
const findCharacterById = async (req, res) => {
  try {
    const character = await characterService.findCharacterByIdService(
      req.params.id
    );
    response(200, character, res, "Character retrieved successfully.");
  } catch (error) {
    errorResponse(error, res, "Error finding the character");
  }
};

// This function is used to create a new character
// If the character data is not valid, an error message is returned
const createCharacter = async (req, res) => {
  try {
    await characterService.createCharacterService(req.body);
    response(201, null, res, "Character created successfully");
  } catch (error) {
    errorResponse(error, res, "Error creating character");
  }
};

// This function is used to update an existing character, given its ID as a URL parameter and its new data as a request body
// If the character is not found, an error message is returned
// If the character data is not valid, an error message is returned
const updateCharacter = async (req, res) => {
  try {
    await characterService.updateCharacterService(req.body, req.params.id);
    response(200, null, res, "Character updated successfully");
  } catch (error) {
    errorResponse(error, res, "Error updating the character");
  }
};

// This function is used to delete a character from the database
// If the character ID is invalid, an error message is returned
const deleteCharacter = async (req, res) => {
  try {
    await characterService.deleteCharacterService(req.params.id);
    response(200, null, res, "Character deleted successfully");
  } catch (error) {
    errorResponse(error, res, "Error deleting character");
  }
};

module.exports = {
  findCharacters,
  findCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
