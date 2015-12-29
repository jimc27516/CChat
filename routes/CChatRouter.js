var express = require('express');
var router = express.Router();

/* GET Hello World page. */
router.get('/', function(req, res, next) {
    res.render('cchat', { title: 'Hello, cchat' });
});

/* GET Userlist page. */
var aChatConversation = {
    messageList: [
        { author: "Lucas", message: "what are you doing tomorrow?" } ,
        { author: "Jim", message: "not sure, how about you?"} ,
        { author: "Lucas", message: "going to Chipotle" }
    ]
}

router.get('/1', function(req, res) {

    res.render('cchat1', {
        "messageList" : aChatConversation.messageList
    });

});

module.exports = router;
