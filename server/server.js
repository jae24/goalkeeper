const express = require('express');
const LOCAL_PORT = 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const router = express.Router();
const uri = 'mongodb+srv://bella:bellabuster@cluster0-gpkwx.mongodb.net/test?retryWrites=true&w=majority'
const app = express();
const moment = require('moment');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);

// Add a listener for application
app.listen(LOCAL_PORT, () => {
  console.log(`Listening on PORT ${LOCAL_PORT}`);
})
// Connect DB
mongoose.connect(uri, {useNewUrlParser:true}, ()=>{
  console.log("successfully connected to mongodb");
});

// Import Schemas
const Goal = require('./Schema/goalSchema');

// API Routes
router.post('/goals', (req, res) => {

  console.log(req.body)

  const newGoal = new Goal({
    _id: req.body._id,
    name: req.body.name,
    description: req.body.description,
    createdOn: req.body.createdOn,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  })

  newGoal.save((err)=>{
    console.log("New goal successfully saved")
  })
}
).get('/goals', (req, res) => {
    Goal.find().sort({ createdOn: -1}).exec(function(err, goals){
      console.log("FOUND");
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
