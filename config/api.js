const apiV1 = require("express")();
const characterRouter = require("../routers/CharacterRouter");
const movieRouter = require("../routers/MovieRouter");
const authRouter = require("../routers/AuthRouter");

apiV1.use("/", characterRouter);
apiV1.use("/", movieRouter);
apiV1.use("/", authRouter);

module.exports = { v1: apiV1 };
