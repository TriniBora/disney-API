const apiV1 = require("express")();
const characterRouter = require("../routers/CharacterRouter");
const movieRouter = require("../routers/MovieRouter");

apiV1.use("/", characterRouter);
apiV1.use("/", movieRouter);

module.exports = { v1: apiV1 };
