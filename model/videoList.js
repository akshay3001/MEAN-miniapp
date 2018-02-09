var mongoose = require('mongoose');
var videoList = new mongoose.Schema({
  videoBy: String,
  title: String,
  url: String,
  id: String
});

mongoose.model('VideoList', videoList);

module.exports = mongoose.model('VideoList');
