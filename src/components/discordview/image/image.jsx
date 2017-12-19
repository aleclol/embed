import React from 'react';
import onClickOutside from "react-onclickoutside";

class EmbedImage extends React.Component {
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
      placeholder="Image URL:"
      type="text"
      value={this.state.url}
      onChange={(ev)=>this.setState({url: ev.target.value})}/> :
    <a
    className="embed-thumbnail embed-thumbnail-rich edit-button-modal-wrapper">
      <img
        alt="X"
        src={this.state.url} 
        role="presentation" 
        className="image"
        style={{ maxWidth: 80, maxHeight: 80 }}/>
      <div className="edit-button-modal">
        <button onClick={(e)=>{
          e.preventDefault()
          this.setState({isEdited: true})
        }}>
          Edit
        </button>
      </div>
    </a>;
  };
}

export default onClickOutside(EmbedImage)