const characterModel = require("../models/CharacterModel");
const movieModel = require("../models/MovieModel");
const genreModel = require("../models/GenreModel");

genreModel.hasMany(movieModel);
movieModel.belongsTo(genreModel);

characterModel.belongsToMany(movieModel, {
  through: "character_movies",
  timestamps: false,
});
movieModel.belongsToMany(characterModel, {
  through: "character_movies",
  timestamps: false,
});
