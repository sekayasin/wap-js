const express = require('express');

const bookController = require('../controller/bookController');

const router = express.Router();

router.post('/', bookController.save);

router.get('/', bookController.getBooks);

router.put('/:bookId', bookController.updateBook);

router.get('/:isbn', bookController.getBookByISBN);

router.delete('/:isbn', bookController.deleteBookByISBN);

module.exports = router;