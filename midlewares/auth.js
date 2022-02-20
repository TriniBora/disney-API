const jwt = require("jsonwebtoken");
const { response, errorResponse } = require("../utils/response");

// This function is used to authenticate a user
const auth = async (req, res, next) => {
  // Verify if the token exists
  if (!req.headers.authorization) {
    return res.status(401).json({ code: 401, message: "Unauthorized" });
  } else {
    // Verify if the token is valid
    // Obtains the token from the header
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      // If the token is invalid or expired, return an error
      if (err) {
        res.status(500).json({
          code: 500,
          message: "There is a problem decoding the JWT token",
          err,
        });
      } else {
        // If the token is valid, return the user
        req.user = decoded;
        next();
      }
    });
  }
};

module.exports = auth;
