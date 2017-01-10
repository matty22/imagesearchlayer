var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var logger = require('morgan');
var key = process.env.API_KEY;

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.get('/search/:searchQuery', function(req, res) {
  var searchQuery = req.params.searchQuery;
  var searchOffset = req.query.offset;

  //Add the Bing image API url here
  router.get('/', function(req, res, next) {
    request({
      uri: 'https://api.cognitive.microsoft.com/bing/v5.0/images/search',
      qs: {
        query: searchQuery,
        offset: searchOffset
      },
      headers: {"Ocp-Apim-Subscription-Key": key}
    }).pipe(res);
  });
  //response.send("The search topic is " + searchQuery + " And the offset is " + offset);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
