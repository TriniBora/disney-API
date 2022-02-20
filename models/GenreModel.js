const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Genre movie model, include schema and validation rules
const genreModel = sequelize.define(
  "Genre",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[A-Za-zÀ-ÿ]+$/g, // Alphabets only (included ñ, Ñ and accents)
          msg: "Only letters are allowed",
        },
        len: {
          args: [3, 255],
          msg: "Minimum length is 3 characters and maximum is 255 characters",
        },
        notNull: { args: false, msg: "Genre name is required" },
      },
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
