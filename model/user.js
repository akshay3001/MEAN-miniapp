var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String
});
mongoose.model('User', userSchema);

module.exports = mongoose.model('User');
