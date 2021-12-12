const path = require('path');

const express = require('express');

const options = {
    "caseSensitive": false,
    "strict": false
};

const router = express.Router(options);

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'users.html'));
});

module.exports = router;

