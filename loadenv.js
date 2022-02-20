const path = require("path");
const dotenv = require("dotenv");

// The following code loads the environment variables from a .env file according to the NODE_ENV variable
try {
  let env = proccess.env.NODE_ENV;
  let result = {};
  switch (env) {
    case "test":
      result = dotenv.config({ path: path.resolve(".env.test") });
      break;
    case "prod":
      result = dotenv.config({ path: path.resolve(".env.prod") });
      break;
    default:
      result = dotenv.config({ path: path.resolve(".env.dev") });
      break;
  }
} catch (error) {
  dotenv.config({ path: path.resolve(".env.dev") });
}
