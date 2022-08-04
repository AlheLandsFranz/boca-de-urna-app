
const initialState = {
    vote: {},
    allVotes: []
}


const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      
      case 'POST_USER_VOTE':
          return {
            ...state,
              vote: action.payload
          };
          case 'GET_ALL_VOTES':
            console.log(action.payload, 'paaaaaay')
            return {
              ...state,
              allVotes: action.payload
            };
      default:
          return state;
  };
};

export default rootReducer;