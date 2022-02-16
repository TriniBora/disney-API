const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const characterModel = sequelize.define(
  "Character",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: { args: /^[A-Za-z\s]+$/g, msg: "Only letters and spaces allowed" },
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
          msg: "Age may be a integer number, upper than zero",
        },
        min: 1,
      },
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
