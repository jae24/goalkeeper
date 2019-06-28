const goalReducer = (state = [], payload) => {
  switch(payload.type){
    case 'POPULATE_GOALS':
      console.log("POPGOALS");
      return [
        ...state,
        ...payload.goals
      ]
    case 'CREATE_GOAL':
      return [
        payload.goal,
        ...state
      ];
      return state
    default:
      return state;
    }
}

export default goalReducer;
