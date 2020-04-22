const INITIAL_STATE = [];

const eventReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_EVENTS':
      return [
        ...action.payload
      ]
    default:
      return state;
  }
}

export default eventReducer;