import React from 'react';
import onClickOutside from "react-onclickoutside";

class EmbedThumbnail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEdited: true
    }
  }

  handleClickOutside = ev => {
    if (this.state.isEdited && this.props.url.length>0){
      this.setState({isEdited: false})
    }
  }

  render(){
    return this.state.isEdited ? 
    <input 
      placeholder="Thumbnail URL:"
      type="text"
      value={this.props.url}
      onChange={(ev)=>this.props.onUpdate(ev.target.value)}/> :
    <img
      alt="X"
      src={this.props.url} 
      role="presentation" 
      className="embed-rich-thumb"
      style={{ maxWidth: 80, maxHeight: 80 }}
      onClick={()=>this.setState({isEdited: true})}/>;
  };
}

export default onClickOutside(EmbedThumbnail)