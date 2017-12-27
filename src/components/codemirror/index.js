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
  setField
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
      content: state.messageBody,
      embed: {
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
      }
    }, null, '  ')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (fromJSON, change) => {
      const defaultObject = {
        content: '',
        embed: {
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
      }

      const lump = {...defaultObject, ...fromJSON} 

      dispatch(setMessageBody(lump.content)) 
      dispatch(setAuthor(lump.embed.author)) 
      dispatch(setDescription(lump.embed.description)) 
      dispatch(setTitle({title: lump.embed.title, url: lump.embed.url}))
      dispatch(setFooter({text: lump.embed.footer.text, iconUrl: lump.embed.footer.icon_url})) 
      dispatch(setColor(integerToColor(lump.embed.color)))
      dispatch(setImage(lump.embed.image.url))
      dispatch(setThumbnail(lump.embed.thumbnail.url))
      lump.embed.fields.forEach((f,i) => {
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