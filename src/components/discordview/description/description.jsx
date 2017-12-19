import React from 'react';
import onClickOutside from "react-onclickoutside";

class EmbedDescription extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEdited: true,
    }
  }

  handleClickOutside = ev => {
    if (this.state.isEdited && this.props.content.length>0){
      this.setState({isEdited: false})
    }
  }

  renderDescriptionPrompt(){
    return <textarea 
    value={this.props.content} 
    onChange={(ev)=>this.props.onUpdate(ev.target.value)}
    placeholder="Description, markdown accepted">
      {this.props.content}
    </textarea>
  }

  render(){
    return <div 
    className="embed-description markup" 
    onClick={()=>this.setState({isEdited: true})}>
      {this.state.isEdited ?
      this.renderDescriptionPrompt() : 
      this.props.parsedContent}
    </div>;
  };
}

export default onClickOutside(EmbedDescription)