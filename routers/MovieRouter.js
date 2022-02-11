const express = require("express");
const movieRouter = express.Router();

const movieController = require("../controllers/MovieController");

movieRouter.get("/movies", movieController.findMovies);
movieRouter.get("/movies/:id", movieController.findMovieById);
movieRouter.post("/movies", movieController.createMovie);
movieRouter.put("/movies/:id", movieController.updateMovie);
movieRouter.delete("/movies/:id", movieController.deleteMovie);

module.exports = movieRouter;
