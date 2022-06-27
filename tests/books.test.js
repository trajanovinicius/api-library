const booksMock = require("../src/mocks/books-mock.json");

test('books returns', () => {
  expect(booksMock).toEqual({
  "bookName": booksMock.bookName,
  "author": booksMock.author,
  "value": booksMock.value,
  "bookName2": booksMock.bookName2,
  "author2": booksMock.author2,
  "value2": booksMock.value2
  })
})