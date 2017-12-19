import { combineReducers } from 'redux'
import messageBody from './messagebody'
import title from './title'
import author from './author'

const visualApp = combineReducers({
  messageBody,
  title,
  author
  })

export default visualApp