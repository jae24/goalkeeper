const mongoose = require('mongoose');

// Schema for GOAL
const goalSchema = {
  name: String,
  description: String
}

var Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
