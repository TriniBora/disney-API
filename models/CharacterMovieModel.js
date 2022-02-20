const sequelize = require("../config/db");

// CharacterMovie model, intermediate schema between Character and Movie
const characterMovieModel = sequelize.define(
  "CharacterMovie",
  {},
  {
    timestamps: false,
  }
);

module.exports = characterMovieModel;
