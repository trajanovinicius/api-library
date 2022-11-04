require("dotenv/config");
const express = require("express");
const requireDir = require("require-dir");
const databse = require("../src/database/index");

const app = express();

databse.connect();
requireDir("../src/models");

app.use(express.json());

app.use("/api/v1", require("../src/routes"));

app.listen(3333, () => {
  console.log(`Hello! Server started on port 3333`);
});
