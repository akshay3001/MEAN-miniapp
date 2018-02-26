// CREATES A NEW USER
var express = require('express');
var router = express.Router();
var User = require('../model/user');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: true
}));


router.post('/', function(req, res) {
  //console.log("user creation started");
  User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone
    },

    function (err, user) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.")
      else {
        console.log('User created with 400 status code', user);
        return res.json(user);
        // if (res.status(200){
        //
        // })

      }

    });
  //console.log('User created successfully');
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.json(users);
  });
});
module.exports = router;
