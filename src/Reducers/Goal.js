const goalReducer = (state = [], payload = []) => {
  switch(payload.type){
    case 'DELETE_GOALS':
      return [
        ...payload.goals
      ]
    case 'POPULATE_GOALS':
      return [
        ...state,
        ...payload.goals
      ]
    case 'CREATE_GOAL':
      return [
        payload.goal,
        ...state
      ];
    case 'DELETE_GOAL':
      return state.filter((goal) => {
        return goal._id !== payload._id
      })
    default:
      return state;
    }
}

export default goalReducer;
