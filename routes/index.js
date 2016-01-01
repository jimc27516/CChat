var express = require('express');
var router = express.Router();
var debug = require('debug')('index');

/* GET home page. */
router.get('/', function(req, res, next) {
    // check session, if logged in, go to user dashboard
    var sess = req.session;
    debug('reading session');
    debug('session = %s', JSON.stringify(sess));
    if (sess.isLoggedIn) {
        // redirect to home page
        res.redirect('/dashboard');
    }
    else {     
        res.render('login', { title: 'CChat' });
    }

});

// process the login
router.post('/login', function(req, res, next) {
    debug('processing login');
    var sess = req.session;

    // for now always pass the login challenge
    debug('setting session as loggec in');
    sess.isLoggedIn = true;

    // navigate to home page
    debug('redirecting to home page');
    res.redirect('/dashboard')

});

// user dashboard
router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'CChat'});
});

module.exports = router;
