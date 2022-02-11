const { Op } = require("sequelize");

const movieModel = require("../models/MovieModel");
const genreModel = require("../models/GenreModel");

// This function returns the movies/series which matching the given title, genre, or sort type stored in the database
// If any query parameter is provided, it returns all the movies/series stored in the database
const findMoviesService = async (query) => {
  // It searches for the movies/series which containing the given title exactly or partially,
  // the exactly given genre in case that the query parameters are passed
  if (Object.keys(query).includes("title")) {
    const movies = await movieModel.findAll({
      //Includes the Op.like sequilize operator to match the name partially or exactly
      where: { ...query, title: { [Op.like]: `%${query.title}%` } },
    });
    return movies;
  } else {
    const movies = await movieModel.findAll({
      where: query,
    });
    return movies;
  }
};

module.exports = {
  findMoviesService,
};
