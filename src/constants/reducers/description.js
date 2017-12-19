import { SET_DESCRIPTION } from 'constants/types';

const description = (state = '', action) => {
    switch (action.type) {
      case SET_DESCRIPTION:
        return action.description
      default:
        return state
    }
  }
  
  export default description