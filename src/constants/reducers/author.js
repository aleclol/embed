import { SET_AUTHOR } from 'constants/types';

const initState = {
    name: '',
    url: '',
    icon_url: ''
}

const author = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTHOR:
            return {...state, ...action.author}
        default:
            return state
    }
  }
  
  export default author