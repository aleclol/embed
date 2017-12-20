import { connect } from 'react-redux'
import { setField, addField, removeField } from 'constants/actions'
import { parseEmbedTitle, parseAllowLinks } from 'lib/markdown'
import EmbedFields from './fields'


const mapStateToProps = (state) => {
  return {
    fields: state.fields.map((field, index)=>{
      return {
        ...field,
        index,
        parsedName: parseEmbedTitle(field.name),
        parsedValue:parseAllowLinks(field.value)
      }
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateField: (index, field) => {
      dispatch(setField(index, field))
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