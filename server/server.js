const express = require('express');
const LOCAL_PORT = 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const router = express.Router();
const uri = 'mongodb+srv://sys_admin:master_password@cluster0-gpkwx.mongodb.net/test?retryWrites=true&w=majority'

// Connect DB
mongoose.connect(uri, {useNewUrlParser:true}, ()=>{
  console.log("successfully connected to mongodb");
});

// Schema for GOAL
const goalSchema = {
  name: String,
  description: String
}

var Goal = mongoose.model('Goal', goalSchema);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(LOCAL_PORT, () => {
  console.log(`Listening on PORT ${LOCAL_PORT}`);
})

router.post('/create', (req, res) => {
  // console.log(`name: ${req.body.name} description: ${req.body.description}`);
  const newGoal = new Goal({
    name: req.body.name,
    description: req.body.description
  })

  newGoal.save();
  console.log(newGoal);


})

app.use('/api', router);
