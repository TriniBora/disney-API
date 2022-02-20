const characterModel = require("../models/CharacterModel");
const movieModel = require("../models/MovieModel");
const genreModel = require("../models/GenreModel");
const characterMovieModel = require("../models/CharacterMovieModel");

// Asociations between the models

// Asociation between the genre and the movie - One to Many (One genre can have many movies)
genreModel.hasMany(movieModel);
movieModel.belongsTo(genreModel);

// Asociations between the character and the movie
// Many to Many ( Many characters can be in many movies and many movies can have many characters)
characterModel.belongsToMany(movieModel, {
  through: characterMovieModel,
});
movieModel.belongsToMany(characterModel, {
  through: characterMovieModel,
});
