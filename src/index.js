require("dotenv/config");
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Hello! Server started on port ${process.env.PORT}`);
});
