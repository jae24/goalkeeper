const express = require('express');
const twilRouter = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;

twilRouter.post('/sms', (req, res)=>{
  const userResponse = req.body.Body;
  const twiml = new MessagingResponse();

  if(userResponse === 'Yes'){
      twiml.message('Great job!');
  } else {
      twiml.message('Better luck tomorrow!');
  }

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
})

module.exports = twilRouter;
