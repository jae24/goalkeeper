const express = require('express');
const LOCAL_PORT = 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const router = express.Router();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(LOCAL_PORT, () => {
  console.log(`Listening on PORT ${LOCAL_PORT}`);
})

router.post('/create', (req, res) => {
  console.log(req.body);
  console.log(`Received a new goal from the react client`);
})

app.use('/api', router);
