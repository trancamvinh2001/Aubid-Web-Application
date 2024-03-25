const express = require("express");
const { createServer } = require("http");
const database = require("../src/config/database");
const routes = require("../src/app/routes");

const PORT = 8080;

const app = express();
const server = createServer(app);

routes(app);

const startServer = async () => {
  try {
    await database.connect();
    server.listen(PORT, () => {
      console.log("Server start");
    });
  } catch (error) {
    return console.error("Error");
  }
};

startServer();
