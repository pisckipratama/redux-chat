var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
  id: Number,
  name: String,
  message: String
});

module.exports = mongoose.model('Chat', ChatSchema);