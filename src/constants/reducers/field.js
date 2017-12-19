import { SET_FIELD } from 'constants/types';

const fieldInitState = {
    name: '',
    value: '',
    inline: true
}

const field = (state = fieldInitState, action) => {
    switch (action.type) {
        case SET_FIELD:
            return {...state, ...action.field}
        default:
            return state
    }
  }
  
export { fieldInitState, field }