const Goal = require('../Schema/goalSchema');

// Connect to twilio api
const accountSid = 'ACfe0131b984d5d4595ff2ef799bf815dc';
const authToken = 'dae0e495030cd4a917f1f2c50c842f60';
const client = require('twilio')(accountSid, authToken);

const sendMessage = () => {
  Goal.find().sort({ createdOn: -1}).exec(function(err, goals){
    goals.forEach((goal)=>{
      client.messages.create({
         body: `Found a goal ${goal.name}`,
         from: '+12403485142',
         to: '+15108338544'
       })
      .then(message => console.log("Your Twilio client is up and running"));
    })
  })
}

module.exports.sendMessage = sendMessage;
