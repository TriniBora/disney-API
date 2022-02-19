const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/UserModel");

const findUserService = async (username) => {
  // Checks if the username is already in the database
  const user = await userModel.findOne({
    where: {
      username: username,
    },
  });
  return user;
};

// This function inserts a new user in the database
const createUserService = async (payload) => {
  const { username, password, email } = payload;

  // Checks if the username is already in the database
  const userStored = await findUserService(username);

  // If the username not in the database, return an error, otherwise return the user
  if (userStored !== null) {
    throw {
      code: 400,
      message: "The username already exists, choose a different username.",
    };

    // If the username not in the database, hash the password and insert the user in the database
  } else {
    let passwordHashed = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username: username,
      password: passwordHashed,
      email: email,
    });

    return user;
  }
};

// This function verifies if username and password are correct, then creates a new token and returns it
const loginService = async (payload) => {
  const { username, password } = payload;

  // Checks if the username is already in the database
  const userStored = await findUserService(username);

  // If the username not in the database, return an error, otherwise return the user
  if (userStored === null) {
    throw { code: 404, message: "Inexistent user" };

    //If the user is already in the database, check if the password is correct
  } else {
    const verifyCredentials = await bcrypt.compare(
      password,
      userStored.password
    );
    //If the password is incorrect, return an error
    if (!verifyCredentials) {
      throw { code: 400, message: "Invalid password" };
    }

    // Create a token when the user is logged in
    const token = await jwt.sign(
      { id: userStored.id },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.TOKEN_EXPIRATION,
      }
    );
    return { user: userStored, token: token };
  }
};
module.exports = {
  createUserService,
  loginService,
};
