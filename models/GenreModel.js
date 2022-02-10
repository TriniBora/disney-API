const { DataTypes } = require("sequelize");

const GenreModel = (sequelize) => {
  return sequelize.define(
    "Genre",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
    },
    {
      tableName: "genres",
    }
  );
};
module.exports = GenreModel;
