const movieService = require("../services/MovieService");
const { response, errorResponse } = require("../utils/response");

// This function is used to find all movies/series, filtering by title, genre and sort by creation date in case of query parameters
const findMovies = async (req, res) => {
  try {
    const queryKeys = Object.keys(req.query);
    // Only allowed to filter movies by title, genre and sort by creation date.
    // If any other query parameter is passed, an error message is returned
    if (queryKeys.every((key) => ["title", "genre", "order"].includes(key))) {
      const movies = await movieService.findMoviesService(req.query);
      const msg = `${
        movies.length > 0
          ? "Movies/series retrieved successfully."
          : "There is no movies/series in the database."
      }`;
      response(200, movies, res, msg);
    } else {
      response(
        401,
        null,
        res,
        "Only movies/series filtered by title, genre, or sort by creation date are allowed."
      );
    }
  } catch (error) {
    errorResponse(error, res, "Error finding movies/series");
  }
};

// This function is used to find a movie/serie by ID, passed in as a URL parameter
// If the movie/serie is not found, an error message is returned
const findMovieById = async (req, res) => {
  try {
    const movie = await movieService.findMovieByIdService(req.params.id);
    response(200, movie, res, "Movie/serie retrieved successfully.");
  } catch (error) {
    errorResponse(error, res, "Error finding movie/serie");
  }
};

// This function is used to create a new movie/serie
// If thw movie/serie data is not valid, an error message is returned
const createMovie = async (req, res) => {
  try {
    await movieService.createMovieService(req.body);
    response(201, null, res, "Movie/serie created successfully");
  } catch (error) {
    errorResponse(error, res, "Error creating movie/serie");
  }
};

// This function is used to update an existing movie/serie, given its ID as a URL parameter and its new data as a request body
// If the movie/serie is not found, an error message is returned
// If the movie/serie data is not valid, an error message is returned
const updateMovie = async (req, res) => {
  try {
    await movieService.updateMovieService(req.body, req.params.id);
    response(200, null, res, "Movie/serie updated successfully");
  } catch (error) {
    errorResponse(error, res, "Error updating movie/serie");
  }
};

// This function is used to delete a movie/serie from the database
// If the movie/serie ID is invalid, an error message is returned
const deleteMovie = async (req, res) => {
  try {
    await movieService.deleteMovieService(req.params.id);
    response(200, null, res, "Movie/serie deleted successfully");
  } catch (error) {
    errorResponse(error, res, "Error deleting movie/serie");
  }
};

module.exports = {
  findMovies,
  findMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
