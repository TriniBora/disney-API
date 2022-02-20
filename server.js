require("./loadenv");
const express = require("express");
const api = require("./config/api");
const app = express();
const sequelize = require("./config/db");
require("./config/associations");
// require("./config/scripts/seeds");

const port = process.env.PORT || 3000;
const domain = process.env.DOMAIN || "localhost";
const appUrl = `http://${domain}:${port}`;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/v1", api.v1);

// Server connection
app.listen(port, () => {
  console.log(`Server is running on ${appUrl}`);
});

// Database connection
(async () => {
  try {
    // force: true will drop the tables if it already exists
    // force: false will not drop the tables if it already exists
    await sequelize.sync({ force: false });
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
