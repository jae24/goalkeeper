const Goal = require('../Schema/goalSchema');
const secrets = require('../../config/secrets');

// Connect to twilio api
const client = require('twilio')(secrets.accountSid, secrets.authToken);

const initialMessage = (goal) => {
  console.log(goal);
  console.log(`+1${goal.creatorPhoneNumber}`)
  const messageBody = `Hi ${goal.creatorName.split(' ')[0]},
                       Thank you for setting a goal on Goaly!

                       We will send you a daily reminder for ${goal.goalTitle} starting on ${goal.startDate}.

                       Commitment is the first step, now let's crush this goal together!

                       "They always say time changes things, but you actually have to change them yourself" - Andy Warhol`

  client.messages.create({
     body: messageBody.replace(/^ +| +$/gm, ""),
     from: '+12403485142',
     to: `+1${goal.creatorPhoneNumber}`
   });
}

// Regex from https://stackoverflow.com/questions/8927844/trimming-spaces-while-preserving-line-breaks
const sendMessage = () => {
  Goal.find().sort({ createdOn: -1}).exec(function(err, goals){
    goals.forEach((goal)=>{
      const messageBody = `Hi ${goal.creatorName.split(' ')[0]},
                           This is your daily reminder from Goaly to ${goal.goalTitle}.

                           Did you ${goal.dailyAction} today?

                           Note from past you: ${goal.noteToSelf} :)

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
