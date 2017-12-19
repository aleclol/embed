import {
  SET_MESSAGE_BODY,
  SET_TITLE,
  SET_AUTHOR
} from 'constants/types';

export const setMessageBody = messageBody => {
    return {
      type: SET_MESSAGE_BODY,
      messageBody
    }
  }

export const setTitle = titleContent => {
  return {
    type: SET_TITLE, 
    titleContent
  }
}

export const setAuthor = authorContent => {
  return {
    type: SET_AUTHOR, 
    authorContent
  }
}