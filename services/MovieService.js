const sequelize = require("../config/db");

const MovieModel = require("../models/MovieModel");
const GenreModel = require("../models/GenreModel");
const MovieModelInstance = MovieModel(sequelize);
const GenreModelInstance = GenreModel(sequelize);
sequelize.sync({ force: true });
class MovieService {
  constructor(movieModel) {
    this.movieModel = movieModel;
  }
}

module.exports = MovieService;
