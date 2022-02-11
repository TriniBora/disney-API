const movieService = require("../services/MovieService");

// This function is used to find all movies/series, filtering by title, genre and sort by creation date in case of query parameters
const findMovies = async (req, res) => {
  try {
    const queryKeys = Object.keys(req.query);
    // Only allowed to filter movies by title, genre and sort by creation date. If any other query parameter is passed,
    // an error message is returned
    if (
      queryKeys.every((key) => ["title", "genre", "creationDate"].includes(key))
    ) {
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
    res.status(500).json(error);
  }
};
const findMovieById = async (req, res) => {};
const createMovie = async (req, res) => {};
const updateMovie = async (req, res) => {};
const deleteMovie = async (req, res) => {};

module.exports = {
  findMovies,
  findMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
