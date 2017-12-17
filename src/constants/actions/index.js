import {
  SET_MESSAGE_BODY,
  SET_TITLE,
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