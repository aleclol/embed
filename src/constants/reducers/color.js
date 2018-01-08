import { SET_COLOR } from 'constants/types';

const color = (state = '#00d084', action) => {
    switch (action.type) {
      case SET_COLOR:
        return action.color
      default:
        return state
    }
  }
  
  export default color