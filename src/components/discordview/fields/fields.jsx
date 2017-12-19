import React from 'react';
import EmbedField from './field'

const EmbedFields = (props)=> {
  return  <div 
  className="embed-fields">
    {props.fields.map((f, i) => 
      <EmbedField 
      key={i} 
      onUpdate={props.onUpdateField}
      onRemove={props.onRemoveField} 
      {...f} />
    )}
    <button
    onClick={props.onAddField()}>
      Add
    </button>
  </div> 
}

export default EmbedFields