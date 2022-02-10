const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const characterModel = sequelize.define(
  "Character",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    history: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    tableName: "characters",
  }
);

module.exports = characterModel;
