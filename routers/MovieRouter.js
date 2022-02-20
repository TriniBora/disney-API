const express = require("express");
const movieRouter = express.Router();

const movieController = require("../controllers/MovieController");

const auth = require("../midlewares/auth");

// API endpoint to get all movies/series or those filtered by query parameters
movieRouter.get("/movies", auth, movieController.findMovies);
// API endpoint to get a movie/serie by ID, passed in as a URL parameter
movieRouter.get("/movies/:id", auth, movieController.findMovieById);
// API endpoint create a movie/serie
movieRouter.post("/movies", auth, movieController.createMovie);
// API endpoint to update a movie/serie by ID, passed in as a URL parameter
movieRouter.put("/movies/:id", auth, movieController.updateMovie);
// API endpoint to delete a movie/serie by ID, passed in as a URL parameter
movieRouter.delete("/movies/:id", auth, movieController.deleteMovie);

module.exports = movieRouter;
