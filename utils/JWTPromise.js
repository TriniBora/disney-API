const jwt = require("jsonwebtoken");

// This function creates a new token, and returns a promise with the token
function JWTSignPromise(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
      if (err) reject(err);

      resolve(token);
    });
  });
}

// This function verify that the token is valid, and returns a promise with the decoded token
function JWTDecode(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
}

module.exports = { JWTSignPromise, JWTDecode };
