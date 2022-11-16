const express = require("express");
const routes = express.Router();

const BooksController = require("../src/controllers/BooksController")

routes.post("/books", BooksController.create);

routes.get("/books-list", BooksController.list);

routes.patch("/books-update/:id", BooksController.update)

routes.delete("/books-delete/:id", BooksController.delete)

module.exports = routes;
