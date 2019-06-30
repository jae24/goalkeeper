import axios from 'axios';
import { api_url } from '../API/api';

// Action Generators
export const createGoal = (payload = {}) => ({
  type: 'CREATE_GOAL',
  goal: {
    _id: payload._id,
    name: payload.name,
    description: payload.description,
    createdOn: payload.createdOn,
    startDate: payload.startDate,
    endDate: payload.endDate
  }
});

export const populateGoals = (payload = []) => ({
  type: 'POPULATE_GOALS',
  goals: payload
})

export const getEmptyGoals = () => ({
  type: 'GET_EMPTY_GOALS',
  goals: []
})

// Async Functions
export const deleteGoals = () => {
  return async function(dispatch) {
    axios
      .delete(`${ api_url }/goals`)
      .then((res)=> {
        dispatch(getEmptyGoals())
      })
  }
}

export const fetchGoals = () => {
  return async function (dispatch) {
    axios
      .get(`${ api_url }/goals`)
      .then((res)=> {
        dispatch(populateGoals(res.data.goals));
    })
  }
};
