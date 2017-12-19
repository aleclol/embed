import { SET_IMAGE } from 'constants/types';

const image = (state = '', action) => {
    switch (action.type) {
      case SET_IMAGE:
        return action.image
      default:
        return state
    }
  }
  
  export default image