const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const characterModel = sequelize.define(
  "Character",
  {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.DECIMAL(5, 2),
    },
    history: {
      type: DataTypes.STRING(1234),
    },
    image: {
      type: DataTypes.BLOB,
    },
  },
  {
    tableName: "characters",
  }
);

module.exports = characterModel;
