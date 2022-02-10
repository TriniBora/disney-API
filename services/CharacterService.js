const sequelize = require("../config/db");

const CharacterModel = require("../models/CharacterModel");
const CharacterModelInstance = CharacterModel(sequelize);
sequelize.sync({ force: true });

class CharacterService {
  constructor(characterModel) {
    this.characterModel = characterModel;
  }
}

module.exports = CharacterService;
