const path = require('path');

const bookRouter = require('./routes/bookRouter');

const express = require('express');

const app = express();

app.use(express.json());

app.use('/books', bookRouter);

app.use((req, res, next) => {
    res.status(404).json({error: req.url + ' API not supported!'});
});

app.use((err, req, res, next) => {
    if (err.message === 'BOOK NOT FOUND')
        res.status(404).json({error: err.message});
    else 
        res.status(500).json({error: 'Something is wrong! Try later'});
});

app.listen(3000, () => console.log(`server listening on port 3000`));