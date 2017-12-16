import { combineReducers } from 'redux'
import messageBody from './messagebody'
import title from './title'

const visualApp = combineReducers({
  messageBody,
  title,
  })

export default visualApp