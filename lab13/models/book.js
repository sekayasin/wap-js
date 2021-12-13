let books = [];

module.exports = class Book {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    // Save a Book - create
    save() {
        this.id = Math.floor(Math.random() * Date.now()).toString();
        books.push(this);
        return this;
    }

    // get all books
    static fetchAll() {
        return books;
    }

    // update book
    update() {
        const index = books.findIndex(book => book.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('BOOK NOT FOUND');
        }
    }

    // find book by ISBN
    static findBookByISBN(isbn) {
        const index = books.findIndex(book => book.ISBN === isbn);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('BOOK NOT FOUND'); 
        }
    }

    // delete a book by ISBN
    static deleteBookByISBN(isbn) {
        const index = books.findIndex(book => book.ISBN === isbn);
        if (index > -1) {
            books = books.filter(book => book.ISBN !== isbn);
        } else {
            throw new Error('BOOK NOT FOUND'); 
        }
    }
}