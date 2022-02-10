const MovieController = require("../controllers/MovieController");
const MovieService = require("../services/MovieService");
const MovieModel = require("../models/MovieModel");
const GenreModel = require("../models/GenreModel");

const MovieServiceInstance = new MovieService();
const MovieControllerInstance = new MovieController(MovieServiceInstance);

const movieRoutes = (app) => {
  app.get("/movies", (req, res) =>
    MovieControllerInstance.findMovies(req, res)
  );

  app.get("/movie/:id", (req, res) =>
    MovieControllerInstance.findMovieById(req, res)
  );

  app.get("/movie/:name", (req, res) =>
    MovieControllerInstance.findMovieByName(req, res)
  );

  app.get("/movie/:genre", (req, res) =>
    MovieControllerInstance.findMovieByGenre(req, res)
  );

  app.get("/movie/:order", (req, res) =>
    MovieControllerInstance.sortMoviesByCreationDate(req, res)
  );

  app.post("/movie", (req, res) =>
    MovieControllerInstance.createMovie(req, res)
  );

  app.put("/movie/:id", (req, res) =>
    MovieControllerInstance.updateMovie(req, res)
  );

  app.delete("/movie/:id", (req, res) =>
    MovieControllerInstance.deleteMovieById(req, res)
  );
};

module.exports = movieRoutes;
