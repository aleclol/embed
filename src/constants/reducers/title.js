import { SET_EMBED_TITLE } from 'constants/types';
import { SET_EMBED_TITLE_URL } from 'constants/types';

const initState = {
    title: '',
    url: ''
}

const title = (state = initState, action) => {
    switch (action.type) {
        case SET_EMBED_TITLE:
            return {title: action.content, ...state}
        case SET_EMBED_TITLE_URL:
            return {url: action.url, ...state}
        default:
            return state
    }
  }
  
  export default title