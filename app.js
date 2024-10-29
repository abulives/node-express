var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://username:password@mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


var usersRouter = require('./routes/users');
var poductsRouter = require('./routes/products');
var ordersRouter = require('./routes/orders');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/products', poductsRouter);
app.use('/api/v1/orders', ordersRouter);
app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error-handling middleware
app.use((error, req, res, next) => {
  // Set the error status code, or default to 500
  res.status(error.status || 500);
  return res.json({
    success: false,
    message: error.message || 'Internal Server Error',
  });
});
module.exports = app;
