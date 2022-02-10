const { DataTypes } = require("sequelize");

const MovieModel = (sequelize) => {
  return sequelize.define(
    "Movie",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rate: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
      },
      creationDate: {
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
};

module.exports = MovieModel;
