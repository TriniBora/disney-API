const { query } = require("express");
const authService = require("../services/AuthService");

// This function logs in a user
const signIn = async (req, res) => {
  try {
    // Data is an object containing the user id and a token
    const data = await authService.loginService(req.body);
    res.status(200).json({
      status: 200,
      data: data,
      message: "User logged in successfully",
    });
  } catch (error) {
    res.status(error.code || 500).json({
      status: error.code || 500,
      data: null,
      message: error.message || "There is an error processing the login",
    });
  }
};

//This function registers a new user
const signUp = async (req, res) => {
  try {
    const user = await authService.createUserService(req.body);

    res.status(201).json({
      status: 201,
      data: null,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(error.code || 500).json({
      status: error.code || 500,
      data: null,
      message: error.message || "There is an error creating the user",
    });
  }
};

module.exports = {
  signIn,
  signUp,
};
