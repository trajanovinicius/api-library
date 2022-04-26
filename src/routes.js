const express = require("express");
const BooksController = require("./controllers/books-controller");

const routes = express.Router();

routes.get("/books", BooksController.getBooks);

module.exports = routes;
