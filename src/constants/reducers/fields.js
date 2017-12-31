import { ADD_FIELD, REMOVE_FIELD, SET_FIELD, REMOVE_ALL_FIELDS } from 'constants/types';
import {field, fieldInitState} from './field'

const fields = (state = [], action) => {
    //console.log(action)
    switch (action.type) {
        case ADD_FIELD:
          return [
            ...state,
            fieldInitState
          ]
        case REMOVE_FIELD:
          let newState = [...state]
          newState.splice(action.index, 1)
          return newState
        case REMOVE_ALL_FIELDS:
          return []
        case SET_FIELD:
          return [
            ...state.slice(0, action.index),
            field(state[action.index], action),
            ...state.slice(action.index+1)
          ]
        default:
            return state
    }
  }
  
  export default fields