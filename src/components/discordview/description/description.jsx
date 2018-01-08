import React from 'react';
import onClickOutside from "react-onclickoutside";
import CondText from "components/common/condText"

class EmbedDescription extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEdited: false,
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
      <CondText condition={this.state.isEdited}
        yes={this.renderDescriptionPrompt()}
        no={this.props.parsedContent} />
    </div>;
  };
}

export default onClickOutside(EmbedDescription)