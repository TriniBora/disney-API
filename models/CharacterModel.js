const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const Character = sequelize.define(
  "Character",
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
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weigth: {
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
