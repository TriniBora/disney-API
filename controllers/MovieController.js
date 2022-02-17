const movieService = require("../services/MovieService");

// This function is used to find all movies/series, filtering by title, genre and sort by creation date in case of query parameters
const findMovies = async (req, res) => {
  try {
    const queryKeys = Object.keys(req.query);
    // Only allowed to filter movies by title, genre and sort by creation date. If any other query parameter is passed,
    // an error message is returned
    if (queryKeys.every((key) => ["title", "genre", "order"].includes(key))) {
      const movies = await movieService.findMoviesService(req.query);
      res.status(200).json({
        status: 200,
        data: movies,
        message: `${
          movies.length > 0
            ? "Movies/series retrieved successfully."
            : "There is no movies/series in the database."
        }`,
      });
    } else {
      res.status(401).json({
        status: 401,
        data: null,
        message:
          "Only movies/series filtered by title, genre, or sort by creation date are allowed.",
      });
    }
  } catch (error) {
    res.status(error.code || 500).json({
      status: error.code || 500,
      data: null,
      message: error.message || "Error finding movie/serie",
    });
  }
};

// This function is used to find a movie/serie by ID, passed in as a URL parameter
// If the movie/serie is not found, an error message is returned
const findMovieById = async (req, res) => {
  try {
    const movie = await movieService.findMovieByIdService(req.params.id);
    res.status(200).json({
      status: 200,
      data: movie,
      message: "Movie/serie retrieved successfully.",
    });
  } catch (error) {
    res.status(error.code || 500).json({
      status: error.code || 500,
      data: null,
      message: error.message || "Error finding movie/serie",
    });
  }
};

// This function is used to create a new movie/serie
// If thw movie/serie data is not valid, an error message is returned ---------- AGREGAR VALIDATE MODEL!!
const createMovie = async (req, res) => {
  try {
    await movieService.createMovieService(req.body);
    res.status(201).json({
      status: 201,
      data: null,
      message: "Movie/serie created successfully",
    });
  } catch (error) {
    res.status(error.code || 500).json({
      status: error.code || 500,
      data: null,
      message: error.message || "Error creating movie/serie",
    });
  }
};

// This function is used to update an existing movie/serie, given its ID as a URL parameter and its new data as a request body
// If the movie/serie is not found, an error message is returned
// If the movie/serie data is not valid, an error message is returned ---------- AGREGAR VALIDATE MODEL!!
const updateMovie = async (req, res) => {
  try {
    await movieService.updateMovieService(req.body, req.params.id);
    res.status(200).json({
      status: 200,
      data: null,
      message: "Movie/serie updated successfully",
    });
  } catch (error) {
    res.status(error.code || 500).json({
      status: error.code || 500,
      data: null,
      message: error.message || "Error updating movie/serie",
    });
  }
};

// This function is used to delete a movie/serie from the database
// If the movie/serie ID is invalid, an error message is returned
const deleteMovie = async (req, res) => {
  try {
    await movieService.deleteMovieService(req.params.id);
    res.status(200).json({
      status: 200,
      data: null,
      message: "Movie/serie deleted successfully",
    });
  } catch (error) {
    res.status(error.code).json({
      status: error.code,
      data: null,
      message: error.message,
    });
  }
};

module.exports = {
  findMovies,
  findMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
