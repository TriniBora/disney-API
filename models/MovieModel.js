const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Movie model, schema and validation rules
const MovieModel = sequelize.define(
  "Movie",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "Minimum length is 2 characters and maximum is 255 characters",
        },
        notNull: { args: false, msg: "Title is required" },
      },
    },
    rate: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      validate: {
        isIn: {
          args: [["1", "2", "3", "4", "5"]],
          msg: "Rate must be 1, 2, 3, 4 or 5",
        },
      },
    },
    creationDate: {
      // Current date to be inserted in the database
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.literal("CURRENT_DATE"),
      validate: {
        isDate: {
          args: true,
          msg: "Creation date must be a date with the format 'yyyy-MM-dd'",
        },
        isBefore: {
          // Current date formatted as 'yyyy-MM-dd'
          args: new Date().toISOString().split("T")[0],
          msg: "Creation date must be before today",
        },
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
    tableName: "movies",
  }
);

module.exports = MovieModel;
