const express = require("express");
const authRouter = express.Router();

const authController = require("../controllers/AuthController");

// API endpoint to login
authRouter.post("/auth/login", authController.signIn);
// API endpoint to register
authRouter.post("/auth/register", authController.signUp);

module.exports = authRouter;
