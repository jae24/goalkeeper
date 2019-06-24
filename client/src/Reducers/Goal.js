const defaultState = [
    {
      name: 'Work on Portfolio',
      daysLeft: 10,
      completion: 100,
      hoursPerDay: 2
    },
    {
      name: 'Connect with recruiters',
      daysLeft: 10,
      completion: 100,
      hoursPerDay: 2
    },
    {
      name: 'Work on Projects',
      daysLeft: 10,
      completion: 100,
      hoursPerDay: 2
    }
];

const goalReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'CREATE_GOAL':
      return [
        ...state,
        action.goal
      ];
      return state
    default:
      return state;
    }
}

export default goalReducer;
