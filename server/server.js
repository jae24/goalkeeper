const express = require('express');
const LOCAL_PORT = 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const router = express.Router();
const uri = 'mongodb+srv://sys_admin:master_password@cluster0-gpkwx.mongodb.net/test?retryWrites=true&w=majority'
const app = express();
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
router.post('/create', (req, res) => {
  // console.log(`name: ${req.body.name} description: ${req.body.description}`);
  const newGoal = new Goal({
    name: req.body.name,
    description: req.body.description
  })

  newGoal.save((err)=>{
    console.log("New goal successfully saved")
  })})

router.get('/goals', (req, res) => {
    Goal.find({}, function(err, goals){
      console.log("FOUND");
      res.json({
        goals: goals
      })
    })
  })
