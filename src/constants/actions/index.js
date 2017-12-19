import {
  SET_MESSAGE_BODY,
  SET_TITLE,
  SET_AUTHOR,
  SET_DESCRIPTION,
  SET_IMAGE,
  SET_THUMBNAIL,
  SET_COLOR,
  SET_FOOTER
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