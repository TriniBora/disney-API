const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const MovieModel = sequelize.define(
  "Movie",
  {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 50],
          msg: "Minimum length is 2 characters and maximum is 50 characters",
        },
      },
      allowNull: { args: false, msg: "Title is required" },
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
