import React from 'react';
import Link from 'components/common/link'
import onClickOutside from "react-onclickoutside";

class EmbedTitle extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
      url: '',
      title: '',
      isEdited: true,
      isUrlEdited: false
    }
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  handleClickOutside = ev => {
    if (this.state.isEdited){
      let {url, title} = this.state
      this.props.onUpdate({url, title})
      this.setState({isUrlEdited: false, isEdited: false})
    }
  }

  renderUrlPrompt(){
    return this.state.isUrlEdited ?
      <input
        key="url"
        type="text"
        placeholder="https://discordapp.com"
        value={this.state.url}
        onChange={(ev)=>this.setState({url: ev.target.value})}
      /> :
      <button onClick={()=>this.setState({isUrlEdited: true})}>
        Add URL
      </button>;
  }
  
  renderTitlePrompt(){
    return <input
      placeholder="title:"
      key="title"
      type="text"
      value={this.state.title}
      onChange={(ev)=>this.setState({title: ev.target.value})}
    />;
  }
  
  renderLink(){
  return <Link 
    href={this.state.url} 
    className="embed-title edit-button-modal-wrapper">
    {this.props.parsedTitle}
    <div className="edit-button-modal">
      <button onClick={(e)=>{
        e.preventDefault()
        this.setState({isEdited: true})
      }}>
        Edit
      </button>
    </div>
  </Link>
  }

renderTitle(){
  return <div 
    className="embed-title" 
    onClick={()=>this.setState({isEdited: true})}>
    {this.props.parsedTitle}
  </div>;
}

render(){
  return this.state.isEdited ?
    <div className="embed-title">
      {this.renderTitlePrompt()}
      {this.renderUrlPrompt()}
    </div> :
    (this.state.url.length>0) ?
    this.renderLink() :
    this.renderTitle()
}
}

export default onClickOutside(EmbedTitle)