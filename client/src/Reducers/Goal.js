const goalReducer = (state = [], payload = []) => {
  switch(payload.type){
    case 'GET_EMPTY_GOALS':
      return [
        ...payload.goals
      ]
    case 'POPULATE_GOALS':
      return [
        ...state,
        ...payload.goals
      ]
    case 'CREATE_GOAL':
      console.log("NEW GOAL IS: ", payload.goal);
      return [
        payload.goal,
        ...state
      ];
    default:
      return state;
    }
}

export default goalReducer;
