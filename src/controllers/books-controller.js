const booksMock = require("../mocks/books-mock.json");

class BooksController {
  getBooks(req, res) {
    return res.json(booksMock);
  }
}

module.exports = new BooksController();
