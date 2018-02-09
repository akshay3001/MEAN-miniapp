//Declarations of required dependencies

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = 3002;
var config = require('./config');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//require all the userModels

var User = require('./model/user');
var VideoList = require('./model/videoList');

//reuqire all controllers

var userController = require('./controller/userController');
var videoListController = require('./controller/videoListController');

//app.use to assign certain controller to url

app.use('/users', userController);
app.use('/videos', videoListController);

// listens to public/index.html

app.use(express.static('public'));

//running server
app.listen(port, function (err, res) {
  if (err) {
    console.log('Error in starting server');
  }else {
    console.log('Server started on port ', port);
  }
});

module.exports = app;
