
const initalState = {
    vote: {},
    votes: []
}


const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      
      case 'POST_USER_VOTE':
          return {
            ...state,
              vote: action.payload
          };
          case 'GET_ALL_VOTES':
            return {
              ...state,
                votes: action.payload
            };
      default:
          return state;
  };
};

export default rootReducer;