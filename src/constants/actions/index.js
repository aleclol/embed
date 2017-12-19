import {
  SET_MESSAGE_BODY,
  SET_TITLE,
  SET_AUTHOR,
  SET_DESCRIPTION,
  SET_IMAGE,
  SET_THUMBNAIL
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

export const setDescription = description => {
  return {
    type: SET_DESCRIPTION,
    description
  }
}

export const setImage = image => {
  return {
    type: SET_IMAGE,
    image
  }
}

export const setThumbnail = thumbnail => {
  return {
    type: SET_THUMBNAIL,
    thumbnail
  }
}