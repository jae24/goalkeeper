const express = require('express');
const LOCAL_PORT = 3001 || process.env.PORT;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const router = express.Router();
const uri = 'mongodb+srv://bella:bellabuster@cluster0-gpkwx.mongodb.net/test?retryWrites=true&w=majority'
const app = express();
const moment = require('moment');
const { sendMessage, initialMessage } = require('./services/Notification')

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
mongoose.connect(uri, {useNewUrlParser:true}, ()=>{
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
    endDate: req.body.endDate
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
