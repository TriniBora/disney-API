const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// User model, schema and validation rules
// username and email must be unique
const userModel = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          //Alphanumeric string that may include _ and - having a length of 3 to 16 characters.
          args: /^[a-zA-Z0-9_-]{3,15}$/g,
          msg: "Only special characters _ and - are allowed in the username.",
        },
        len: {
          args: [3, 16],
          msg: "Username minimum length is 3 characters and maximum is 16 characters",
        },
        notNull: { args: false, msg: "Username is required" },
      },
      unique: {
        args: true,
        msg: "Username already in use",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 255],
          msg: "Password min length is 8 characters",
        },
        notNull: { args: false, msg: "Password is required" },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email already in use",
      },
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid email.",
        },
        notNull: { args: false, msg: "Email is required" },
      },
    },
  },
  {
    timestamps: false,
  },
  {
    tableName: "users",
  }
);

module.exports = userModel;
