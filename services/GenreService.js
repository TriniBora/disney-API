const genreModel = require("../models/GenreModel");

// This function return the genre with the given id stored in the database
// If the genre is not found, an error message is returned
const findGenreByIdService = async (id) => {
  // Verifies if the genreId is defined
  if (id === undefined) {
    throw { code: 400, message: "Genre is required" };
  }
  const genre = await genreModel.findByPk(id);
  // Verifies if the genre exists in the database, if not found, throws an error

  if (genre === null) {
    throw { code: 400, message: "Invalid genre id" };
  }

  return genre;
};

module.exports = { findGenreByIdService };
