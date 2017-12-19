import React from 'react';
import onClickOutside from "react-onclickoutside";

class EmbedDescription extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEdited: true,
      content: ''
    }
  }

  handleClickOutside = ev => {
    if (this.state.isEdited && this.state.content.length>0){
      let {content} = this.state
      this.props.onChangeContent(content)
      this.setState({isEdited: false})
    }
  }

  renderDescriptionPrompt(){
    return <textarea 
    value={this.state.content} 
    onChange={(ev)=>this.setState({content: ev.target.value})}
    placeholder="Description, markdown accepted">
      {this.state.content}
    </textarea>
  }

  render(){
    return <div 
    className="embed-description markup" 
    onClick={()=>this.setState({isEdited: false})}>
    {this.state.isEdited?this.renderDescriptionPrompt():this.props.parsedContent}
    </div>;
  };
}

export default onClickOutside(EmbedDescription)