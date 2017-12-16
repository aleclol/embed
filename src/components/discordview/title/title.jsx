import React from 'react';
import Link from 'components/common/link'

class EmbedTitle extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
      isEdited: (this.props.parsedTitle.length>0)?false:true,
      isUrlEdited: false
    }
    this.enterEditMode = this.enterEditMode.bind(this);
    this.exitEditMode = this.exitEditMode.bind(this);
    this.enterUrlEditMode = this.enterUrlEditMode.bind(this);
    this.exitUrlEditMode = this.exitUrlEditMode.bind(this);
  }

  enterEditMode(ev){
    this.setState({isEdited: true, ...this.state})
  }
  
  exitEditMode(ev){
    this.setState({isEdited: false, ...this.state})
    this.props.onEdit(ev.target.value)
  }
  
  enterUrlEditMode(ev){
    this.setState({isUrlEdited: true, ...this.state})
  }
  
  exitUrlEditMode(ev){
    this.setState({isUrlEdited: false, ...this.state})
    this.props.onUrlEdit(ev.target.value)
  }

  render(){
    const placeholder = {
      title: 'title, turns blue and is clickable if you specify url',
      url: 'https://discordapp.com'
    }
    let urlContent = this.state.isUrlEdited?
      <input type="text" placeholder={placeholder.url} onChange={this.exitUrlEditMode}></input>
      :<button onClick={this.enterUrlEditMode}>Add URL</button>
    let content = this.state.isEdited?
      [<input type="text" placeholder={placeholder.title} onChange={this.exitEditMode}></input>,urlContent]
      :this.props.parsedTitle
    let computed = <div className="embed-title">{content}</div>;
    console.log(content);
    if (this.props.urlEntered) {
      computed = <Link href={this.props.url} className="embed-title">{content}</Link>;
    }
  
    return computed;
  };
}

export default EmbedTitle