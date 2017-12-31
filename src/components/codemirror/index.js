import { connect } from 'react-redux'
import { 
  setMessageBody, 
  setAuthor, 
  setDescription, 
  setTitle, 
  setFooter,
  setColor,
  setImage,
  setThumbnail,
  addField,
  setField,
  removeAllFields
} from 'constants/actions'
import CodeMirror from './codemirror'

const colorToInteger = (color) => {
  return parseInt(color.slice(1), 16)
}

const integerToColor = (number) => {
  return '#' + ('00000' + (number | 0).toString(16)).substr(-6);
}

export const mapStateToProps = (state) => {
  return {
    value: JSON.stringify({
      plainText: state.messageBody,
      title: state.title.title,
      url: state.title.url,
      description: state.description,
      author: {
        name: state.author.name,
        url: state.author.url,
        icon_url: state.author.iconUrl,          
      },
      color: colorToInteger(state.color),
      footer: {
        text: state.footer.text,
        icon_url: state.footer.iconUrl
      },
      thumbnail: { url: state.thumbnail },
      image: { url: state.image },
      fields: state.fields
    }, null, '  ')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (fromJSON, change) => {
      const defaultObject = {
        plainText: '',
        title: '',
        url: '',
        description: '',
        author: {
          name: '',
          url: '',
          icon_url: '',          
        },
        color: 0,
        footer: {
          text: '',
          icon_url: ''
        },
        thumbnail: { url: '' },
        image: { url: '' },
        fields: []
      }

      const lump = {...defaultObject, ...fromJSON} 

      dispatch(setMessageBody(lump.plainText)) 
      dispatch(setAuthor(lump.author)) 
      dispatch(setDescription(lump.description)) 
      dispatch(setTitle({title: lump.title, url: lump.url}))
      dispatch(setFooter({text: lump.footer.text, iconUrl: lump.footer.icon_url})) 
      dispatch(setColor(integerToColor(lump.color)))
      dispatch(setImage(lump.image.url))
      dispatch(setThumbnail(lump.thumbnail.url))
      dispatch(removeAllFields())
      lump.fields.forEach((f,i) => {
        dispatch(addField())
        dispatch(setField(i, f))
      })
    },
  }
}

const CodeMirrorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeMirror)

export default CodeMirrorContainer