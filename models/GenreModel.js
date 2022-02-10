const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const genreModel = sequelize.define(
  "Genre",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    tableName: "genres",
  }
);

module.exports = genreModel;
