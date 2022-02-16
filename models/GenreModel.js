const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const genreModel = sequelize.define(
  "Genre",
  {
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.BLOB,
    },
  },
  {
    timestamps: false,
  },
  {
    tableName: "genres",
  }
);

module.exports = genreModel;
