// CREATES A NEW USER

var express = require('express');
var router = express.Router();
var VideoList = require('../model/videoList');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function (req, res) {
  console.log('video creation started');
  VideoList.create({
      videoBy: req.body.videoBy,
      title: req.body.title,
      url: req.body.url,
      id: req.body.id
    },

    function (err, videos) {
      if (err) return res.status(500).send('There was a problem adding the video details to the database.');
      else {
        res.json(videos);
      }

      console.log('video creation ended');


    }
  );
  console.log('Video saved in database successfully');
}
);

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
  VideoList.find({}, function (err, videos) {
    if (err) return res.status(500).send('There was a problem finding the videos.');
    else {
      res.json(videos);
    }
  });
}
);
module.exports = router;
