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
      //Includes the Op.like sequelize operator to match the name partially or exactly
      where: { ...query, title: { [Op.like]: `%${query.title}%` } },
    });
    return movies;
  } else if (Object.keys(query).includes("order")) {
    const order = query.order.toUpperCase();

    // If the order is diferent to ASC or DESC, an error message is returned
    if (order !== "ASC" && order !== "DESC") {
      throw { code: 400, message: "Order must be ASC or DESC" };
    }

    //Removes order key because this is not a column in the database table "movies"
    delete query["order"];

    const movies = await movieModel.findAll({
      //Includes the "order" sequelize option to sort the movies/series by creation date, ascending or descending
      where: query,
      order: [["creationDate", order]],
    });
    return movies;
  } else {
    const movies = await movieModel.findAll({
      where: query,
    });
    return movies;
  }
};

// This function return the movie/serie with the given id stored in the database
// If the movie/serie is not found, an error message is returned
const findMovieByIdService = async (id) => {
  const movie = await movieModel.findAll({
    where: {
      id: id,
    },
  });
  if (movie.length === 0) {
    throw { code: 400, message: "Invalid movie/serie id" };
  }
  return movie;
};

// This function inserts a new movie/serie in the database
const createMovieService = async (payload) => {
  const { title, rate, creationDate, image } = payload;
  const movie = await movieModel.create({
    title: title,
    rate: rate,
    creationDate: creationDate,
    image: image,
  });
  return movie;
};

// This function updates only the modified data of the movie/serie with the given id stored in the database
const updateMovieService = async (payload, id) => {
  //Destructuring the payload
  const { title, rate, creationDate, image } = payload;

  // Checks if the movie/serie exists in the database, if not found, throws an error
  await findMovieByIdService(id);
  const movieUpdated = await movieModel.update(
    {
      title: title || movie.title,
      rate: rate || movie.rate,
      creationDate: creationDate || movie.creationDate,
      image: image || movie.image,
    },
    {
      where: {
        id: id,
      },
    }
  );
  return movieUpdated;
};

// This function deletes the movie/serie with the given id stored in the database
const deleteMovieService = async (id) => {
  // Checks if the movie/serie exists in the database, if not found, throws an error
  await findMovieByIdService(id);
  const movieDeleted = await movieModel.destroy({
    where: {
      id: id,
    },
  });
  return movieDeleted;
};

module.exports = {
  findMoviesService,
  findMovieByIdService,
  createMovieService,
  updateMovieService,
  deleteMovieService,
};
