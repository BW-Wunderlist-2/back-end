const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const accessRouter = require("./onBoarding/accessRouter");
const tasksRouter = require("./protected/tasksRouter");
// const authRouter = require("../auth/auth-router.js");
// const usersRouter = require("../users/users-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
server.use("/api/admission", accessRouter)
server.use("/api", tasksRouter)
// server.use("/api/auth", authRouter);
// server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
 
    res.sendFile("message.html", {root: __dirname});
});

module.exports = server;
