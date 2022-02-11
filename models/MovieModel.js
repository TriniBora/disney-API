const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const MovieModel = sequelize.define(
  "Movie",
  {
    title: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
    },
    creationDate: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    image: {
      type: DataTypes.BLOB,
    },
  },
  {
    tableName: "movies",
  }
);

module.exports = MovieModel;
