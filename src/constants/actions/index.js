import {
  SET_MESSAGE_BODY,
  SET_TITLE,
} from 'constants/types';

export const setMessageBody = content => {
    return {
      type: SET_MESSAGE_BODY,
      content
    }
  }

export const setTitle = titleContent => {
  return {
    type: SET_TITLE, 
    titleContent
  }
}