import { connect } from 'react-redux'
import { setTitle } from 'constants/actions'
import { parseEmbedTitle } from 'lib/markdown'
import EmbedTitle from './title'

const mapStateToProps = (state) => {
  return {
    parsedTitle: parseEmbedTitle(state.title.title),
    ...state.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (titleContent) => {
      dispatch(setTitle(titleContent))
    },
  }
}

const TitleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmbedTitle)

export default TitleContainer