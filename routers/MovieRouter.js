const express = require("express");
const movieRouter = express.Router();

const movieController = require("../controllers/MovieController");

const auth = require("../midlewares/auth");

movieRouter.get("/movies", auth, movieController.findMovies);
movieRouter.get("/movies/:id", auth, movieController.findMovieById);
movieRouter.post("/movies", auth, movieController.createMovie);
movieRouter.put("/movies/:id", auth, movieController.updateMovie);
movieRouter.delete("/movies/:id", auth, movieController.deleteMovie);

module.exports = movieRouter;
