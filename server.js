require("./loadenv");
const express = require("express");
const api = require("./config/api");
const app = express();
const sequelize = require("./config/db");
const seeds = require("./scripts/seeds");
require("./config/associations");
// require("./scripts/seeds");

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/v1", api.v1);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  // Database connection test
  const dbConnection = async () => {
    try {
      await sequelize.sync({ force: false });

      console.log(
        "Connection to the database has been established successfully."
      );
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  dbConnection();
  // seeds();
});
