const mongoose = require('mongoose');

// Schema for GOAL
const goalSchema = {
  _id: String,
  name: String,
  description: String,
  createdOn: String
}

var Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
