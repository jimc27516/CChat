var express = require('express');
var router = express.Router();

/* GET Hello World page. */
router.get('/', function(req, res, next) {
    res.render('helloworld', { title: 'Hello, World!!!!!' });
});

module.exports = router;
