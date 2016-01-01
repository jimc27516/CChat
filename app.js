var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');
var debug = require('debug')('http')
  , http = require('http')
  , name = 'CChat';

// Mongo integration
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/CChat');


var routes = require('./routes/index');
var users = require('./routes/users');
var CChatRouter = require('./routes/CChatRouter');
var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'chatFavicon.ico')));
app.use(logger('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

var store = new MongoDBStore({ 
    uri: 'mongodb://localhost:27017/CChatSessions',
    collection: 'mySessions'
});

// initialize the session
app.use(session({
  genid: function(req) {
    return uuid.v4(); // use UUIDs for session IDs
  },
  secret: 'keyboard cat',
  store: store,
  saveUninitialized: true,
  resave: true
}));

app.use('/', routes);
app.use('/users', users);
app.use('/cchat', CChatRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


debug('booting CChat');
  
module.exports = app;
