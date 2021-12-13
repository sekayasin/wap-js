const Book = require('../models/book');

exports.save = (req, res, next) => {
    const saveNewBook = new Book(null, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).save();
    res.status(201).json(saveNewBook);
};

exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll());
};

exports.updateBook = (req, res, next) => {
    const updatedBook = new Book(req.params.bookId, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).update();
    res.status(200).json(updatedBook);
};

exports.getBookByISBN = (req, res, next) => {
    res.status(200).json(Book.findBookByISBN(req.params.isbn));
};

exports.deleteBookByISBN = (req, res, next) => {
    Book.deleteBookByISBN(req.params.isbn);
    res.status(200).end();
}