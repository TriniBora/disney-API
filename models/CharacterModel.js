const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const MovieModel = require("./MovieModel");

const characterModel = sequelize.define(
  "Character",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[A-Za-zÀ-ÿ\s]+$/g, //Letters(included ñ and Ñ), spaces and accents
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
        // min: {
        //   args: 0,
        //   msg: "Weight must be greater than zero",
        // },
      },
    },
    history: {
      type: DataTypes.STRING(1234),
    },
    image: {
      type: DataTypes.BLOB,
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
