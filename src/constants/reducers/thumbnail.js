import { SET_THUMBNAIL } from 'constants/types';

const thumbnail = (state = '', action) => {
    switch (action.type) {
      case SET_THUMBNAIL:
        return action.thumbnail
      default:
        return state
    }
  }
  
  export default thumbnail