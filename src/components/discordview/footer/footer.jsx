import React from 'react';
import Moment from 'moment';
import onClickOutside from "react-onclickoutside";

class EmbedFooter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEdited: true,
      isIconUrlEdited: true
    }
  }

  handleClickOutside = ev => {
    if (this.state.isEdited && this.props.text.length>0){
      this.setState({isEdited: false})
    }
    if (this.state.isIconUrlEdited && this.props.iconUrl.length>0){
      this.setState({isIconUrlEdited: false})
    }
  }

  renderIcon(){
    return this.state.isIconUrlEdited ? 
    <input 
      placeholder="Footer icon URL:"
      type="text"
      value={this.props.iconUrl}
      onChange={(ev)=>this.props.onUpdate({iconUrl: ev.target.value})}/> :
    <img
      alt="X"
      src={this.props.iconUrl} 
      role="presentation" 
      className="embed-footer-icon" 
      width="20"
      height="20"
      onClick={()=>this.setState({isIconUrlEdited: true})}/>;
  }

 
  renderTextPrompt(){
    return <input
      placeholder="Footer text:"
      type="text"
      value={this.props.text}
      onChange={(ev)=>this.props.onUpdate({text: ev.target.value})}
    />;
  }

  render(){
    // pass null, since undefined will make moment(...) return the current date/time
    let time = Moment(this.props.timestamp !== undefined ? this.props.timestamp : null);
    time = time.isValid() ? time.format('ddd MMM Do, YYYY [at] h:mm A') : null;
    const footerText = [this.props.text, time].filter(Boolean).join(' | ');
  
    return <div>
      {this.renderIcon()}
      <span 
      className="embed-footer"
      onClick={()=>this.setState({isEdited: true})}>
        {this.state.isEdited ?
        this.renderTextPrompt() :
        footerText} 
      </span>
    </div>;
  };
}
export default onClickOutside(EmbedFooter)