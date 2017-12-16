import {
  SET_MESSAGE_BODY,
  SET_TITLE,
  SET_TITLE_URL
} from 'constants/types';

export const setMessageBody = content => {
    return {
      type: SET_MESSAGE_BODY,
      content
    }
  }

export const setTitle = title => {
  return {
    type: SET_TITLE,
    title
  }
}

export const setTitleUrl = url => {
  return {
    type: SET_TITLE_URL,
    url
  }
}