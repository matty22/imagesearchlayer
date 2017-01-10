var express = require('express');
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
  // Prevent searchOffset from being undefined
  if (searchOffset === undefined) {
    searchOffset = 0;
  }

  // Call Bing Image Search API
  request.get({
    uri: 'https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=' + searchQuery + '&offset=' + searchOffset,
    method: "GET",
    headers: { "Ocp-Apim-Subscription-Key": key }
  }, function(error, response, body) {
      var resultsArray = JSON.parse(body);
      var returnArray = [];
      for (var i = 0; i < 10; i++) {
        returnArray.push({
          "imageUrl": resultsArray[i].contentUrl,
          "name": resultsArray[i].name,
          "pageUrl": resultsArray[i].hostPageUrl
        });
      }
      console.log(returnArray);
      res.send(resultsArray);
      });
  
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
