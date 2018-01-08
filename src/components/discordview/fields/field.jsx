import React from 'react';
import onClickOutside from "react-onclickoutside";

class EmbedField extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isEdited: true
    }
  }

  handleClickOutside = ev => {
    if (this.state.isEdited && this.props.name.length>0 && this.props.value.length>0){
      this.setState({isEdited: false})
    }
  }

  renderFieldName(){
    return <div 
    className="embed-field-name">
    {this.state.isEdited ?
      <input
      type="text" 
      key="name"
      placeholder="Name:"
      value={this.props.name}
      onChange={(ev) => this.props.onUpdate( this.props.index, {name: ev.target.value})}/> : 
      this.props.parsedName}
    </div>
  }

  renderFieldValue(){
    return <div 
    className="embed-field-value markup">
    {this.state.isEdited ?
      <input
      type="text" 
      key="value"
      placeholder="Value:"
      value={this.props.value}
      onChange={(ev)=> this.props.onUpdate(this.props.index, {value: ev.target.value})}/> : 
      this.props.parsedValue}
    </div>
  }

  render(){
    const cls = 'embed-field' + (this.props.inline ? ' embed-field-inline' : '');
  
    return <div 
    className={cls}>
      <div
      onClick={()=>this.setState({isEdited: true})}>
        {this.renderFieldName()}
        {this.renderFieldValue()}
      </div>
      <div className='buttons'>
        Inline <input
          type="checkbox"
          defaultChecked={true}
          onClick={(ev)=>this.props.onUpdate(this.props.index, {inline: ev.target.checked})}>
        </input>
        <button 
          onClick={()=>this.props.onRemove(this.props.key)}>
          Remove
        </button>
      </div>
    </div>
  }
}

export default onClickOutside(EmbedField)