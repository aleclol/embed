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

const filterState = (state) => {
  const editorState = {}
  Object.keys(state).forEach((key)=>{
    let value = state[key]
    const notEmptyString = (val) => (typeof val === "string")&&(val.length > 0)
    let notEmptyArray = Array.isArray(value)&&(value.length>0)

    if (notEmptyString(value) || notEmptyArray ) editorState[key] = value
    else if (typeof value === "object" && !(notEmptyArray)) {
      for (var prop in value) {
        if (notEmptyString(value[prop])) {
          if (!(key in editorState)) editorState[key] = {}
          editorState[key][prop] = value[prop]
        }
      }
    }
  })

  return editorState
}

const mapState = (state) => {
  const mappedState = {
    plainText: state.messageBody,
    title: state.title.title,
    url: state.title.url,
    description: state.description,
    author: {...state.author},
    color: colorToInteger(state.color),
    footer: {...state.footer},
    thumbnail: { url: state.thumbnail },
    image: { url: state.image },
    fields: state.fields
  }

  return mappedState
}

export const mapStateToProps = (state) => {

  return {
    value: JSON.stringify(filterState(mapState(state)), null, '  ')
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

      for (var prop in fromJSON) {
        if ((prop in defaultObject)&&(!Array.isArray(defaultObject[prop]))&&(typeof defaultObject[prop] === 'object')) {
          Object.assign(defaultObject[prop], fromJSON[prop])
        }
      }
      const lump = Object.assign(defaultObject, fromJSON) 

      dispatch(setMessageBody(lump.plainText)) 
      dispatch(setAuthor({...lump.author})) 
      dispatch(setDescription(lump.description)) 
      dispatch(setTitle({title: lump.title, url: lump.url}))
      dispatch(setFooter({...lump.footer})) 
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