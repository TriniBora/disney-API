const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const MovieModel = require("./MovieModel");

// Character model, include schema and validation rules
const characterModel = sequelize.define(
  "Character",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[A-Za-zÀ-ÿ\s]+$/g, // Alphabets only (included ñ and Ñ), spaces and accents
          msg: "Only letters and spaces allowed",
        },
        len: {
          args: [2, 255],
          msg: "Minimum length is 2 characters and maximum is 255 characters",
        },
        notNull: { args: false, msg: "Name is required" },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: "Age may be a integer number",
        },
        min: {
          args: 1,
          msg: "Age must be greater than zero",
        },
      },
    },
    weight: {
      type: DataTypes.DECIMAL(5, 2),
      validate: {
        isDecimal: {
          args: true,
          msg: "Weight must be a decimal number",
        },
      },
    },
    history: {
      type: DataTypes.STRING(1234),
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          args: true,
          msg: "Image must be a valid URL",
        },
      },
    },
  },
  {
    timestamps: false,
  },
  {
    tableName: "characters",
  }
);

module.exports = characterModel;
