const { query } = require("express");
const characterService = require("../services/CharacterService");

const findCharacters = async (req, res) => {
  try {
    const queryKeys = Object.keys(req.query);
    if (queryKeys.every((key) => key in ["name", "age", "weight"])) {
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
    res.status(500).json(error);
  }
};

const findCharacterById = async (req, res) => {
  try {
    const character = await characterService.findCharacterByIdService(
      req.params.id
    );
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findCharacterMovies = async (req, res) => {};

const createCharacter = async (req, res) => {
  try {
    await characterService.createCharacterService(req.body);
    res.status(201).json({ message: "Character created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCharacter = async (req, res) => {
  try {
    await characterService.updateCharacterService(req.body, req.params.id);
    res.status(200).json({ message: "Character updated successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteCharacter = async (req, res) => {
  try {
    await characterService.deleteCharacterService(req.params.id);
    res.status(200).json({ message: "Character deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
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
