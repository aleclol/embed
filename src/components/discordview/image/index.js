import { connect } from 'react-redux'
import { setImage } from 'constants/actions'
import EmbedImage from './image'

const mapStateToProps = (state) => {
  return {url: state.image}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (url) => {
      dispatch(setImage(url))
    }
  }
}

const ImageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmbedImage)

export default ImageContainer