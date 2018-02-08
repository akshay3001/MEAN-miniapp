// CREATES A NEW USER
var express = require('express');
var router = express.Router();
var User = require('../model/user');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));


router.post('/', function (req, res) {
  console.log("user creation started");
    User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        },

        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
        console.log('User created successfully');
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});
module.exports = router;
