const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const GenreModel = sequelize.define(
  "Genre",
  {
    //   id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     allowNull: false,
    //   },
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

module.exports = GenreModel;
