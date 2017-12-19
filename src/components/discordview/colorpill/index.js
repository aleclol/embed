import { connect } from 'react-redux'
import { setColor } from 'constants/actions'
import EmbedColorPill from './colorpill'

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (color) => {
      dispatch(setColor(color))
    }
  }
}

const ColorPillContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmbedColorPill)

export default ColorPillContainer