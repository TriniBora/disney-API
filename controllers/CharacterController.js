const { query } = require("express");
const characterService = require("../services/CharacterService");

// This function is used to find all characters, filtering by name, age and weight in case of query parameters
const findCharacters = async (req, res) => {
  try {
    const queryKeys = Object.keys(req.query);
    // Only allowed to filter characters by name, age and weight. If any other query parameter is passed,
    // an error message is returned
    if (
      queryKeys.every((key) =>
        ["name", "age", "weight", "movies"].includes(key)
      )
    ) {
      const characters = await characterService.findCharactersService(
        req.query
      );
      res.status(200).json({
        status: 200,
        data: characters,
        message: `${
          characters.length > 0
            ? "Characters retrieved successfully."
            : "There is no characters in the database."
        }`,
      });
    } else {
      res.status(401).json({
        status: 401,
        data: null,
        message:
          "Only characters filtered by name, age, or weight are allowed.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// This function is used to find a character by ID, passed in as a URL parameter
// If the character is not found, an error message is returned
const findCharacterById = async (req, res) => {
  try {
    const character = await characterService.findCharacterByIdService(
      req.params.id
    );
    res.status(200).json({
      status: 200,
      data: character,
      message: `${
        character.length === 1
          ? "Character retrieved successfully."
          : "There is no exists any character with this ID in the database."
      }`,
    });
  } catch (error) {
    res.status(error.code).json({
      status: error.code,
      data: null,
      message: error.message,
    });
  }
};

const findCharacterMovies = async (req, res) => {};

// This function is used to create a new character
// If the character data is not valid, an error message is returned ---------- AGREGAR VALIDATE MODEL!!
const createCharacter = async (req, res) => {
  try {
    await characterService.createCharacterService(req.body);
    res.status(201).json({
      status: 201,
      data: null,
      message: "Character created successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// This function is used to update an existing character, given its ID as a URL parameter and its new data as a request body
// If the character is not found, an error message is returned
// If the character data is not valid, an error message is returned ---------- AGREGAR VALIDATE MODEL!!
const updateCharacter = async (req, res) => {
  try {
    await characterService.updateCharacterService(req.body, req.params.id);
    res.status(200).json({
      status: 200,
      data: null,
      message: "Character updated successfully",
    });
  } catch (error) {
    res.status(error.code).json({
      status: error.code,
      data: null,
      message: error.message,
    });
  }
};

// This function is used to delete a character from the database
// If the character ID is invalid, an error message is returned
const deleteCharacter = async (req, res) => {
  try {
    await characterService.deleteCharacterService(req.params.id);
    res.status(200).json({
      status: 200,
      data: null,
      message: "Character deleted successfully",
    });
  } catch (error) {
    res.status(error.code).json({
      status: error.code,
      data: null,
      message: error.message,
    });
  }
};

module.exports = {
  findCharacters,
  findCharacterById,
  findCharacterMovies,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
