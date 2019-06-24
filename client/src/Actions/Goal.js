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
