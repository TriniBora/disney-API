const sequelize = require("../config/db");

const movieModel = require("../models/MovieModel");
const genreModel = require("../models/GenreModel");

sequelize.sync({ force: true });

module.exports = {};
