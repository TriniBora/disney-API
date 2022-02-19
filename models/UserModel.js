const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

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
        is: {
          //At least one upper case English letter, one lower case English letter, one number and one special character
          args: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$ %^&*-])$/g,
          msg: "Password must have at least one digit, one lowercase character, one uppercase character, one special character.",
        },
        len: {
          args: 8,
          msg: "Password length is 8 characters",
        },
        notNull: { args: false, msg: "Password is required" },
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
