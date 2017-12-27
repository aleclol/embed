import { connect } from 'react-redux'
import { mapStateToProps } from 'components/codemirror'
import Clipboard from './clipboard'

const ClipboardContainer = connect(
  mapStateToProps
)(Clipboard)

export default ClipboardContainer