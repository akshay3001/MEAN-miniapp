var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = 3002;
var config = require('./config');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var User = require('./model/user');
var userController = require('./controller/userController');

app.use('/users', userController);

app.listen(port, function (err, res) {
  if (err) {
    console.log('Error in starting server');
  }
  else {
    console.log('Server started on port ', port);
  }
});

module.exports = app;
