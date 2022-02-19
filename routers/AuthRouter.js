const express = require("express");
const authRouter = express.Router();

const authController = require("../controllers/AuthController");

authRouter.post("/auth/login", authController.signIn);
authRouter.post("/auth/register", authController.signUp);

module.exports = authRouter;
