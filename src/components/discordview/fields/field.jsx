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
      key="name"
      placeholder="Name:"
      value={this.props.name}
      onChange={this.props.onUpdate({name: this.props.name, key: this.props.key})}/> : 
      this.props.parsedName}
    </div>
  }

  renderFieldValue(){
    return <div 
    className="embed-field-value markup">
    {this.state.isEdited ?
      <input
      key="value"
      placeholder="Value:"
      value={this.props.value}
      onChange={this.props.onUpdate({value: this.props.value, key: this.props.key})}/> : 
      this.props.parsedValue}
    </div>
  }

  render(){
    const cls = 'embed-field' + (this.props.inline ? ' embed-field-inline' : '');
  
    return <div 
    className={cls}
    onClick={this.setState({isEdited: true})}>
    {this.renderFieldName()}
    {this.renderFieldValue()}
    <button 
      onClick={this.props.onUpdate({inline: !this.props.inline, key: this.props.key})}>
      Inline?
    </button>
    <button 
      onClick={this.props.onRemove(this.props.key)}>
      Remove
    </button>
    </div>;
  };
}

export default onClickOutside(EmbedField)