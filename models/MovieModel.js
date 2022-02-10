const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const Movie = sequelize.define(
  "Movie",
  {
    //   id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     allowNull: false,
    //   },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.ENUM(1, 2, 3, 4, 5),
      allowNull: false,
    },
    createdDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    tableName: "movies",
  }
);
