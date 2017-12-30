import React from 'react';
import onClickOutside from "react-onclickoutside";

class EmbedImage extends React.Component {
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
    return <div 
    className="embed-image">
    {this.state.isEdited ? 
      <input 
        placeholder="Image URL:"
        type="text"
        value={this.props.url}
        onChange={(ev)=>this.props.onUpdate(ev.target.value)}/> :
      <a
      className="embed-thumbnail embed-thumbnail-rich edit-button-modal-wrapper">
        <img
          alt="X"
          src={this.props.url} 
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
      </a>
    }
    </div>
  }  
}

export default onClickOutside(EmbedImage)