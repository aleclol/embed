import React from 'react'
import onClickOutside from "react-onclickoutside";
import MessageTimestamp from 'components/common/timestamp';

class MessageBody extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEdited: true,
      content: ''
    }
  }

  handleClickOutside = ev => {
    if (this.state.isEdited){
      let {content} = this.state
      this.props.onChangeContent(content)
      this.setState({isEdited: false})
    }
  }

  renderInput(){
    return <textarea 
    value={this.state.content} 
    onChange={(ev)=>this.setState({content: ev.target.value})}
    placeholder="Markdown accepted">
      {this.state.content}
    </textarea>
  }

  renderCompactContent(){
    return <div
      className="markup" 
      onClick={()=>{this.setState({isEdited: true})}}>
      <MessageTimestamp compactMode={this.props.compactMode} />
      <span className="username-wrapper v-btm">
        <strong className="user-name">{this.props.username}</strong>
        <span className="bot-tag">BOT</span>
      </span>
      <span className="highlight-separator"> - </span>
      <span className="message-content">
        {this.state.isEdited ? 
        this.renderInput() : 
        this.props.parsedContent}
      </span>
  </div>
  }

  renderContent(){
    return <div 
    className="markup"
    onClick={()=>{this.setState({isEdited: true})}}>
      {this.state.isEdited ? 
      this.renderInput() :
      this.props.parsedContent}
    </div>;
  }

  render(){
    return this.props.compactMode ? 
        this.renderCompactContent() : 
        this.renderContent()
  };

}

export default onClickOutside(MessageBody)