require("./loadenv");
const express = require("express");
const api = require("./config/api");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/v1", api.v1);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
