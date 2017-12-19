import { connect } from 'react-redux'
import { setField, addField, removeField } from 'constants/actions'
import { parseEmbedTitle, parseAllowLinks } from 'lib/markdown'
import EmbedFields from './fields'


const mapStateToProps = (state) => {
  return {
    fields: state.fields.map((field)=>{
      return {
        ...field,
        parsedName: parseEmbedTitle(field.name),
        parsedValue:parseAllowLinks(field.value)
      }
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateField: (field, index) => {
      dispatch(setField(field, index))
    },
    onAddField: () => {
      dispatch(addField())
    },
    onRemoveField: index => {
      dispatch(removeField(index))
    }
  }
}

const FieldsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmbedFields)

export default FieldsContainer