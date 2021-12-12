const path = require('path'); 

const express = require('express');

const options = {
    "caseSensitive": false,
    "strict": false
};

const router = express.Router(options);

// route - /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/products');
})

module.exports = router;