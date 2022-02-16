const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const characterModel = sequelize.define(
  "Character",
  {
    name: {
      type: DataTypes.STRING,
      validate: {
        is: { args: /^[A-Za-z\s]+$/g, msg: "Only letters and spaces allowed" },
        len: {
          args: [2, 50],
          msg: "Minimum length is 2 characters and maximum is 50 characters",
        },
      },
      allowNull: { args: false, msg: "Name is required" },
    },
    age: {
      type: DataTypes.INTEGER,
      validate: { isInt: true, min: 1 },
    },
    weight: {
      type: DataTypes.DECIMAL(5, 2),
      validate: { isDecimal: true, min: 0 },
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
