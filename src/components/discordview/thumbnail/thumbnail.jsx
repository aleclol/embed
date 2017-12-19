import React from 'react';
import onClickOutside from "react-onclickoutside";

class EmbedThumbnail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEdited: true,
      url: ''
    }
  }

  handleClickOutside = ev => {
    if (this.state.isEdited && this.state.url.length>0){
      let {url} = this.state
      this.props.onUpdate(url)
      this.setState({isEdited: false})
    }
  }

  render(){
    return this.state.isEdited ? 
    <input 
      placeholder="Thumbnail URL:"
      type="text"
      value={this.state.url}
      onChange={(ev)=>this.setState({url: ev.target.value})}/> :
    <img
      alt="X"
      src={this.state.url} 
      role="presentation" 
      className="embed-rich-thumb"
      style={{ maxWidth: 80, maxHeight: 80 }}
      onClick={()=>this.setState({isEdited: true})}/>;
  };
}

export default onClickOutside(EmbedThumbnail)