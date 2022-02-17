const characterModel = require("../models/CharacterModel");
const movieModel = require("../models/MovieModel");
const genreModel = require("../models/GenreModel");
const characterMovieModel = require("../models/CharacterMovieModel");

genreModel.hasMany(movieModel);
movieModel.belongsTo(genreModel);

characterModel.belongsToMany(movieModel, {
  through: characterMovieModel,
});
movieModel.belongsToMany(characterModel, {
  through: characterMovieModel,
});
