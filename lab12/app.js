const path = require('path');

const express = require('express');

const app = express();

const homeRouter = require('./routes/home');

const usersRouter = require('./routes/users');

const productsRouter = require('./routes/products');

const adminRouter = require('./routes/admin');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use(homeRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'));
});

app.use(function(err, req, res, next) {
    res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log(`server listening on port 3000`));
