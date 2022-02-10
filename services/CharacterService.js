const sequelize = require("../config/db");

const characterModel = require("../models/CharacterModel");

const createCharacter = async (newCharacter) => {
  const character = await characterModel.create({
    name: newCharacter.name,
    age: newCharacter.age,
    weight: newCharacter.weight,
    history: newCharacter.history,
    image: newCharacter.image,
  });
  console.log(newCharacter);
  console.log(character);
  return character;
};

sequelize.sync({ force: true });

module.exports = { createCharacter };
