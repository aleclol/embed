import { SET_MESSAGE_BODY } from 'constants/types';

const messageBody = (state = '', action) => {
    switch (action.type) {
      case SET_MESSAGE_BODY:
        return action.content
      default:
        return state
    }
  }
  
  export default messageBody