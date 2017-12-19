import { connect } from 'react-redux'
import { setThumbnail } from 'constants/actions'
import EmbedThumbnail from './thumbnail'

const mapStateToProps = (state) => {
  return { url: state.thumbnail }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (url) => {
      dispatch(setThumbnail(url))
    }
  }
}

const ThumbnailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmbedThumbnail)

export default ThumbnailContainer