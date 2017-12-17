import { SET_TITLE } from 'constants/types';

const initState = {
    title: '',
    url: ''
}

const title = (state = initState, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {...action.titleContent}
        default:
            return state
    }
  }
  
  export default title