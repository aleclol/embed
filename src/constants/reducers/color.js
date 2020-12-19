import { SET_COLOR } from 'constants/types';

const color = (state = '#b6e3f0', action) => {
    switch (action.type) {
      case SET_COLOR:
        return action.color
      default:
        return state
    }
  }
  
  export default color