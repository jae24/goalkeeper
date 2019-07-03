const mongoose = require('mongoose');

// Schema for GOAL
const goalSchema = {
  _id: String,
  creatorName: String,
  creatorPhoneNumber: String,
  goalTitle: String,
  goalDescription: String,
  dailyAction: String,
  noteToSelf: String,
  createdOn: String,
  startDate: String,
  endDate: String,
  creatorResponses: {
    yes: Number,
    no: Number
  }
}

var Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
