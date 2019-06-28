import axios from 'axios';
import { api_url } from '../API/api';

// Action Generators
export const createGoal = (payload = {}) => ({
  type: 'CREATE_GOAL',
  goal: {
    name: payload.name,
    description: payload.description,
    daysLeft: 10,
    completion: 100,
    hoursPerDay: 2
  }
});

export const fetchGoals = () => {
  return async function (dispatch) {
    axios
      .get(`${ api_url }/goals`)
      .then((res)=> {
        dispatch(populateGoals(res.data.goals))
    })
  }
};

export const populateGoals = (payload) => ({
  type: 'POPULATE_GOALS',
  goals: payload
})
