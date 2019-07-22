const Goal = require('../schema/goalSchema');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const path = require('path');
const moment = require('moment');
let secrets = {};

if(process.env.NODE_ENV === 'production'){
  secrets = {
    accountSid: process.env.accountSid,
    authToken: process.env.authToken
  }
} else {
  secrets = require('../../config/secrets');
}

const accountSid = secrets.accountSid;
const authToken = secrets.authToken;

console.log(accountSid);

// Connect to twilio api
const client = require('twilio')(accountSid, authToken);

const initialMessage = (goal) => {
  const messageBody = `Hi ${goal.creatorName.split(' ')[0]},
                       Thank you for setting a goal on Goaly!

                       We will send you a daily reminder for ${goal.goalTitle} starting on ${moment(goal.startDate).format("MMMM Do YYYY")}.`

  client.messages
  .create({
     body: messageBody.replace(/^ +| +$/gm, ""),
     from: '+12403485142',
     to: `+1${goal.creatorPhoneNumber}`
   })
   .then(message => {
   });
}

const sendMessage = () => {
  Goal.find().sort({ createdOn: -1 }).exec(function(err, goals){
    goals.forEach((goal)=>{
      const messageBody = `Hi ${goal.creatorName.split(' ')[0]},
                           This is your daily reminder from Goaly to ${goal.goalTitle}.

                           Did you ${goal.goalTitle} today?

                           Reply yes or no.`
      client.messages.create({
         body: messageBody.replace(/^ +| +$/gm, ""),
         from: '+12403485142',
         to: `+1${goal.creatorPhoneNumber}`
       });
    })
  })
}

module.exports.sendMessage = sendMessage;
module.exports.initialMessage = initialMessage;
