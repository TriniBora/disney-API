const { Op } = require("sequelize");

const characterModel = require("../models/CharacterModel");

// This function returns the characters which matching the given name, age, or weight stored in the database
// If any query parameter is provided, it returns all the characters stored in the database
const findCharactersService = async (query) => {
  // It searches for the characters which containing the given name exactly or partially,
  // the exactly given age and the exactly given weight in case that the query parameters are passed
  if (Object.keys(query).includes("name")) {
    const characters = await characterModel.findAll({
      //Includes the Op.like sequilize operator to match the name partially or exactly
      where: { ...query, name: { [Op.like]: `%${query.name}%` } },
    });
    return characters;
  } else {
    const characters = await characterModel.findAll({
      where: query,
    });
    return characters;
  }
};

// This function return the character with the given id stored in the database
// If the character is not found, an error message is returned
const findCharacterByIdService = async (id) => {
  const character = await characterModel.findAll({
    where: {
      id: id,
    },
  });
  if (character.length === 0) {
    throw { code: 400, message: "Invalid character id" };
  }
  return character;
};

// This function inserts a new character in the database
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

// This function updates only the modified data of the character with the given id stored in the database
const updateCharacterService = async (payload, id) => {
  //Destructuring the payload
  const { name, age, weight, history, image } = payload;

  // Checks if the character exists in the database, if not found, throws an error
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

// This function deletes the character with the given id stored in the database
const deleteCharacterService = async (id) => {
  // Checks if the character exists in the database, if not found, throws an error
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
