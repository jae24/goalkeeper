const Goal = require('../schema/goalSchema');
const api_router = require('../routers/goal_api');

const checkIfPhoneNumberUnique = (userNum) => {
  let unique = false;
  Goal.findOne({ creatorPhoneNumber: userNum}, (err, item) => {
    if(!item){
      unique = true;
      console.log(unique);
    }
  })
  return unique;
}

module.exports = checkIfPhoneNumberUnique;
