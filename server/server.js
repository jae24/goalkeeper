const express = require('express');
const LOCAL_PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const router = express.Router();
const app = express();
const moment = require('moment');
const path = require('path');

// Exports from local JS files
const { sendMessage, initialMessage } = require('./services/Notification');

let secrets = {};

if(process.env.NODE_ENV === 'production'){
  secrets = {
    uri: process.env.uri
  }
} else {
  secrets = require('../config/secrets');
}

const mongoDB_uri = secrets.uri;

// App middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);

// Import Schemas
const Goal = require('./Schema/goalSchema');

// Add a listener for the server
app.listen(LOCAL_PORT, () => {
  // sendMessage()
  console.log(`Listening on PORT ${LOCAL_PORT}`);
})
// Connect DB
mongoose.connect(mongoDB_uri, {useNewUrlParser:true}, ()=>{
  console.log("successfully connected to mongodb");
});

router.get('/testMessages', (req, res)=>{
  sendMessage()
  res.send({
    status: "Messages sent"
  })
})

// API Routes
router.post('/goals', (req, res) => {

  const newGoal = new Goal({
    _id: req.body._id,
    creatorName: req.body.creatorName,
    creatorPhoneNumber: req.body.creatorPhoneNumber,
    goalTitle: req.body.goalTitle,
    goalDescription: req.body.goalDescription,
    dailyAction: req.body.dailyAction,
    noteToSelf: req.body.noteToSelf,
    createdOn: req.body.createdOn,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    creatorResponses: {
      done: {
        yes: 0,
        no: 0
      },
      timeSpent: []
    }
  })

  initialMessage(newGoal);

  newGoal.save((err)=>{
    console.log("New goal successfully saved")
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

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
  // Sets the static folder
  app.use(express.static('../build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
  });
}
