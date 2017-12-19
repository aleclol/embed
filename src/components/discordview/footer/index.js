import { connect } from 'react-redux'
import { setFooter } from 'constants/actions'
import EmbedFooter from './footer'

const mapStateToProps = (state) => {
  return {
    ...state.footer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (footer) => {
      dispatch(setFooter(footer))
    },
  }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmbedFooter)

export default FooterContainer