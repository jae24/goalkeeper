import axios from 'axios';
import { api_url } from '../API/api';

// Action Generators
export const createGoal = (payload = {}) => ({
  type: 'CREATE_GOAL',
  goal: {
    _id: payload._id,
    creatorName: payload.creatorName,
    creatorPhoneNumber: payload.creatorPhoneNumber,
    goalTitle: payload.goalTitle,
    goalDescription: payload.goalDescription,
    dailyAction: payload.dailyAction,
    createdOn: payload.createdOn,
    startDate: payload.startDate,
    endDate: payload.endDate
  }
});

export const editGoal = (payload = {}) => ({
  type: 'EDIT_GOAL',
  goal: {
    _id: payload._id,
    creatorName: payload.creatorName,
    creatorPhoneNumber: payload.creatorPhoneNumber,
    goalTitle: payload.goalTitle,
    goalDescription: payload.goalDescription,
    dailyAction: payload.dailyAction,
    createdOn: payload.createdOn,
    startDate: payload.startDate,
    endDate: payload.endDate
  }
});

export const populateGoals = (payload = []) => ({
  type: 'POPULATE_GOALS',
  goals: payload
})

export const deleteGoals = () => ({
  type: 'DELETE_GOALS',
  goals: []
})

export const deleteGoal = (payload) => ({
  type: 'DELETE_GOAL',
  _id: payload
})

export const deleteGoalAsync = (payload) => {
  return async function(dispatch) {
    axios
      .delete(`${ api_url }/goal/${payload}`)
      .then((res) => {
        dispatch(deleteGoal(payload));
      })
  }
}

// Async Functions
export const deleteGoalsAsync = () => {
  return async function(dispatch) {
    axios
      .delete(`${ api_url }/goals`)
      .then((res)=> {
        dispatch(deleteGoals());
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
