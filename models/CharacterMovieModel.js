const sequelize = require("../config/db");

const characterMovieModel = sequelize.define(
  "CharacterMovie",
  {},
  {
    timestamps: false,
  }
);

module.exports = characterMovieModel;
