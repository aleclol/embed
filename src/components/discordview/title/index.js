import { connect } from 'react-redux'
import { setTitle } from 'constants/actions'
import { setTitleUrl } from 'constants/actions'
import { parse, jumboify } from 'lib/markdown'
import EmbedTitle from './title'

const mapStateToProps = (state) => {
  //console.log('>>>',state);
  return {
    parsedTitle: parse(state.title.title, true, {}, jumboify),
    urlEntered: !!state.title.url,
    url: state.title.url
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (title) => {
        dispatch(setTitle(title))
    },
    onUrlEdit: (url) =>{
        dispatch(setTitleUrl(url))
    }
  }
}

const TitleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmbedTitle)

export default TitleContainer