import { connect } from 'react-redux'
import { setDescription } from 'constants/actions'
import EmbedDescription from './description'
import {parseAllowLinks} from 'lib/markdown'

const mapStateToProps = (state) => {
  return {
    parsedContent: parseAllowLinks(state.description)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeContent: (content) => {
      dispatch(setDescription(content))
    }
  }
}

const DescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmbedDescription)

export default DescriptionContainer