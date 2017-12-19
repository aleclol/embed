import { connect } from 'react-redux'
import { setAuthor } from 'constants/actions'
import EmbedAuthor from './author'

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (authorContent) => {
      dispatch(setAuthor(authorContent))
    },
  }
}

const AuthorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmbedAuthor)

export default AuthorContainer