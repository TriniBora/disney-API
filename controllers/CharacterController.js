const characterService = require("../services/CharacterService");

const findCharacters = async (req, res) => {};
const findCharactersById = async (req, res) => {};
const findCharacterByName = async (req, res) => {};
const findCharactersByAge = async (req, res) => {};
const findCharactersByWeight = async (req, res) => {};
const findCharacterMovies = async (req, res) => {};

const createCharacter = async (req, res) => {
  try {
    const character = await characterService.createCharacter(req.body);
    res.statusCode = 201;
    res.send(character);
  } catch (error) {
    res.send(error.message);
  }
};

const updateCharacter = async (req, res) => {};
const deletCharacter = async (req, res) => {};

module.exports = {
  findCharacters,
  findCharactersById,
  findCharacterByName,
  findCharactersByAge,
  findCharactersByWeight,
  findCharacterMovies,
  createCharacter,
  updateCharacter,
  deletCharacter,
};
