import { combineReducers } from 'redux'
import messageBody from './messagebody'
import title from './title'
import author from './author'
import description from './description'
import image from './image'
import thumbnail from './thumbnail'
import color from './color'
import footer from './footer'
import fields from './fields'

const visualApp = combineReducers({
  messageBody,
  title,
  author,
  description,
  image,
  thumbnail,
  color,
  footer,
  fields
  })

export default visualApp