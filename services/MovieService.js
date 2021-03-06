const { Op } = require("sequelize");

const movieModel = require("../models/MovieModel");
const genreModel = require("../models/GenreModel");
const characterModel = require("../models/CharacterModel");

const genreService = require("./GenreService");

// This function returns the movies/series which matching the given title, genre, or sort type stored in the database
// If any query parameter is provided, it returns all the movies/series stored in the database
const findMoviesService = async (query) => {
  const queryKeys = Object.keys(query);
  // Defines a variable named "newQuery" to be actualized according to the query parameters
  let newQuery = { ...query };
  // It searches for the movies/series which containing the given title exactly or partially
  if (queryKeys.includes("title")) {
    //Includes the Op.like sequelize operator to match the title partially or exactly
    newQuery = { ...query, title: { [Op.like]: `%${query.title}%` } };
  }

  // If there is a genre parameter, first finds the id  of that genre
  // then removes the genre parameter from the query because this is not a column in the database table "movies"
  // finally the genre_id is added to the query
  if (queryKeys.includes("genre")) {
    const genre = await genreService.findGenreByIdService(query.genre);
    //Removes genre key because this is not a column in the database table "movies"
    delete newQuery["genre"];
    newQuery = { ...newQuery, GenreId: genre.id };
  }

  // Relation between the movies and the genres tables
  const includeGenre = {
    model: genreModel,
    as: "Genre",
    attributes: ["name"],
  };
  // Relation between the movies and the characters tables
  const includeCharacters = {
    model: characterModel,
    as: "Characters",
    attributes: ["name"],
  };
  // Fields to be selected from the table "movies"
  const attributes = ["title", "creationDate", "image"];
  // Conditions to be applied to the query
  const where = newQuery;

  // If the query parameters include "order", it applies the sort type to the query
  if (queryKeys.includes("order")) {
    const order = query.order.toUpperCase();
    // If the order is diferent to ASC or DESC, an error message is returned
    if (order !== "ASC" && order !== "DESC") {
      throw { code: 400, message: "Order must be ASC or DESC" };
    }
    //Removes order key because this is not a column in the database table "movies"
    delete newQuery["order"];
    // Order results by the given sort type
    const orderBy = [["creationDate", order]];

    // Returns the movies/series which matching the given title, genre, or sort type stored in the database
    const movies = await movieModel.findAll({
      include: [includeGenre, includeCharacters],
      attributes: attributes,
      where: where,
      order: orderBy,
    });
    return movies;
    // Returns all the movies/series stored in the database without applying any sort type
  } else {
    const movies = await movieModel.findAll({
      include: [includeGenre, includeCharacters],
      attributes: attributes,
      where: where,
    });
    return movies;
  }
};

// This function return the movie/serie with the given id stored in the database
// If the movie/serie is not found, an error message is returned
const findMovieByIdService = async (id) => {
  const movie = await movieModel.findByPk(id);
  if (movie === null) {
    throw { code: 400, message: "Invalid movie/serie id" };
  }
  return movie;
};

// This function inserts a new movie/serie in the database
const createMovieService = async (payload) => {
  //Destructuring the payload
  const { title, rate, creationDate, image, genreId } = payload;

  // Verifies if the genre id is valid or if exists in the database, if not, throws an error
  await genreService.findGenreByIdService(genreId);

  await movieModel.create({
    title: title,
    rate: rate,
    creationDate: creationDate,
    image: image,
    GenreId: genreId,
  });
};

// This function updates only the modified data of the movie/serie with the given id stored in the database
const updateMovieService = async (payload, id) => {
  //Destructuring the payload
  const { title, rate, creationDate, image, genreId } = payload;

  // Checks if the movie/serie exists in the database, if not found, throws an error
  const movie = await findMovieByIdService(id);

  // Verifies if the genre id is valid or if exists in the database, if not, throws an error
  await genreService.findGenreByIdService(genreId);

  await movieModel.update(
    {
      title: title || movie.title,
      rate: rate || movie.rate,
      creationDate: creationDate || movie.creationDate,
      image: image || movie.image,
      GenreId: genreId || movie.genreId,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

// This function deletes the movie/serie with the given id stored in the database
const deleteMovieService = async (id) => {
  // Checks if the movie/serie exists in the database, if not found, throws an error
  await findMovieByIdService(id);
  await movieModel.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  findMoviesService,
  findMovieByIdService,
  createMovieService,
  updateMovieService,
  deleteMovieService,
};
