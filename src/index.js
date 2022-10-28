require("dotenv/config");
const express = require("express");
const requireDir = require("require-dir");
const databse = require("../src/database/index");

const app = express();

databse.connect();
requireDir("../src/models");

app.use(express.json());

app.use("/api/v1", require("../src/routes"));

app.listen(process.env.PORT, () => {
  console.log(`Hello! Server started on port ${process.env.PORT}`);
});
