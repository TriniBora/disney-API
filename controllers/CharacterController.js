const characterService = require("../services/CharacterService");

const findCharacters = async (req, res) => {
  try {
    const characters = await characterService.findCharactersService();
    res.status(200).json(characters);
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

const findCharacterByName = async (req, res) => {
  try {
    const character = await characterService.findCharacterByNameService(
      req.params.name
    );
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findCharactersByAge = async (req, res) => {
  try {
    const character = await characterService.findCharacterByAgeService(
      req.params.age
    );
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findCharactersByWeight = async (req, res) => {
  try {
    const character = await characterService.findCharacterByWeightService(
      req.params.weight
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
  findCharacterByName,
  findCharactersByAge,
  findCharactersByWeight,
  findCharacterMovies,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
