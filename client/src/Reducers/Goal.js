const goalReducer = (state = [], payload) => {
  switch(payload.type){
    case 'POPULATE_GOALS':
      return [
        ...state,
        ...payload.goals
      ]
    case 'CREATE_GOAL':
      return [
        ...state,
        payload.goal
      ];
      return state
    default:
      return state;
    }
}

export default goalReducer;
