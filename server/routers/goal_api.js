const express = require('express');
const api_router = express.Router();
const Goal = require('../schema/goalSchema');
const { sendMessage, initialMessage } = require('../services/Notification');

api_router.get('/testMessages', (req, res)=>{
  sendMessage()
  res.send({
    status: "Messages sent"
  })
})

// API Routes
api_router.post('/goals', (req, res) => {

  const newGoal = new Goal({
    _id: req.body._id,
    creatorName: req.body.creatorName,
    creatorPhoneNumber: req.body.creatorPhoneNumber,
    goalTitle: req.body.goalTitle,
    goalDescription: req.body.goalDescription,
    dailyAction: req.body.dailyAction,
    createdOn: req.body.createdOn,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    yesCount: 0,
    noCount: 0
  })

  Goal.findOne({ creatorPhoneNumber: newGoal.creatorPhoneNumber}, (err, goal) => {
    if(!goal){
      newGoal.save((err)=>{
      res.sendStatus(200);
      })
    } else {
      res.send({error: "there is already a goal associated with this phone number"});
    }
  })
}
).get('/goals', (req, res) => {
    Goal.find().sort({ createdOn: -1}).exec(function(err, goals){
      res.json({
        goals
      })
    })
  }
).get('/goals/:id', (req, res) => {
  Goal.findOne({_id: req.params.id}, function(err, goal){
    console.log(goal);
    res.json({
      goal
    })
  })
}
).delete('/goals', (req, res) => {
  Goal.remove({}, function(err){
    if(err) {
      console.log("Something went wrong")
    } else {
      res.send("DELETED ALL");
    }
  })
}
).delete('/goal/:id', (req, res)=>{
  Goal.deleteOne({_id: req.params.id}, function(err, goal){
    if(err){
      console.log("Something went wrong ", req.params.id);
    } else {
      console.log("goal removed", req.params);
      res.json({
        status: 'success'
      })
    }
  })
})

module.exports = api_router
