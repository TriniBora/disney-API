const sequelize = require("../config/db");

const characterModel = require("../models/CharacterModel");

const findCharactersService = async (query) => {
  const characters = await characterModel.findAll({
    where: query,
  });
  return characters;
};

const findCharacterByIdService = async (id) => {
  const character = await characterModel.findAll({
    where: {
      id: id,
    },
  });
  return character;
};

const createCharacterService = async (payload) => {
  const character = await characterModel.create({
    name: payload.name,
    age: payload.age,
    weight: payload.weight,
    history: payload.history,
    image: payload.image,
  });
  return character;
};

const updateCharacterService = async (payload, id) => {
  const { name, age, weight, history, image } = payload;
  const character = await findCharacterByIdService(id);
  const characterUpdated = await characterModel.update(
    {
      name: name || character.name,
      age: age || character.age,
      weight: weight || character.weight,
      history: history || character.history,
      image: image || character.image,
    },
    {
      where: {
        id: id,
      },
    }
  );
  return characterUpdated;
};

const deleteCharacterService = async (id) => {
  const character = await findCharacterByIdService(id);
  const characterDeleted = await characterModel.destroy({
    where: {
      id: id,
    },
  });
  return characterDeleted;
};

module.exports = {
  findCharactersService,
  findCharacterByIdService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
