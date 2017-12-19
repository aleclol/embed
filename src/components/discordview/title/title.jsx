import React from 'react';
import Link from 'components/common/link'
import onClickOutside from "react-onclickoutside";

class EmbedTitle extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
      isEdited: true,
      isUrlEdited: false
    }
  }

  handleClickOutside = ev => {
    if (this.state.isEdited && this.props.title.length>0){
      this.setState({isUrlEdited: false, isEdited: false})
    }
  }

  renderUrlPrompt(){
    return this.state.isUrlEdited ?
      <input
        key="url"
        type="text"
        placeholder="Title URL:"
        value={this.props.url}
        onChange={(ev)=>this.props.onUpdate({url: ev.target.value})}
      /> :
      <button onClick={()=>this.setState({isUrlEdited: true})}>
        Add URL
      </button>;
  }
  
  renderTitlePrompt(){
    return <input
      placeholder="Title:"
      key="title"
      type="text"
      value={this.props.title}
      onChange={(ev)=>this.props.onUpdate({title: ev.target.value})}
    />;
  }
  
  renderLink(){
  return <Link 
    href={this.props.url} 
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
      (this.props.url.length>0) ?
      this.renderLink() :
      this.renderTitle()
  }
}

export default onClickOutside(EmbedTitle)