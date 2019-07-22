const express = require('express');
const LOCAL_PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const moment = require('moment');
const path = require('path');

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

// Routers
const api_router = require('./routers/goal_api');
const twil_router = require('./routers/twilio');

app.use('/api', api_router);
app.use(twil_router);

// Import Schemas
const Goal = require('./schema/goalSchema');

// Add a listener for the server
app.listen(LOCAL_PORT, () => {
  // sendMessage()
  console.log(`Listening on PORT ${LOCAL_PORT}`);
})
// Connect DB
mongoose.connect(mongoDB_uri, {useNewUrlParser:true}, ()=>{
  console.log("successfully connected to mongodb");
});


// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
  // Sets the static folder
  app.use(express.static('../build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
  });
}
