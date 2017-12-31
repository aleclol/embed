import {
  SET_MESSAGE_BODY,
  SET_TITLE,
  SET_AUTHOR,
  SET_DESCRIPTION,
  SET_IMAGE,
  SET_THUMBNAIL,
  SET_COLOR,
  SET_FOOTER,
  SET_FIELD,
  ADD_FIELD,
  REMOVE_FIELD,
  REMOVE_ALL_FIELDS
} from 'constants/types';

export const setMessageBody = messageBody => {
    return {
      type: SET_MESSAGE_BODY,
      messageBody
    }
  }

export const setTitle = title => {
  return {
    type: SET_TITLE, 
    title
  }
}

export const setAuthor = author => {
  return {
    type: SET_AUTHOR, 
    author
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

export const setColor = color => {
  return {
    type: SET_COLOR,
    color
  }
}

export const setFooter = footer => {
  return {
    type: SET_FOOTER, 
    footer
  }
}

export const setField = (index, field) => {
  return {
    type: SET_FIELD,
    index, 
    field
  }
}

export const addField = () => {
  return {
    type: ADD_FIELD
  }
}

export const removeField = index => {
  return {
    type: REMOVE_FIELD, 
    index
  }
}

export const removeAllFields = () => {
  return {
    type: REMOVE_ALL_FIELDS
  }
}