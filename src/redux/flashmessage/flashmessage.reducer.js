const INITIAL_STATE = [];

const flashmessageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FLASH_MESSAGE':
      return [
        ...state,
        action.payload
      ]
    case 'DELETE_FLASH_MESSAGE':
      {
        state.splice(action.payload, 1)
        return [...state];
      }
    case 'DELETE_FLASH_MESSAGES':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default flashmessageReducer;