import React from 'react';
import Link from 'components/common/link'
import onClickOutside from "react-onclickoutside";

class EmbedAuthor extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEdited: true,
      isUrlEdited: false,
      isIconUrlEdited: true,
    }
  }

  handleClickOutside = ev => {
      if (this.state.isEdited && this.props.name.length>0){
        this.setState({isUrlEdited: false, isEdited: false})
      }
      if (this.state.isIconUrlEdited && this.props.icon_url.length>0){
        this.setState({isIconUrlEdited: false})
      }
  }

  renderIcon(){
    return this.state.isIconUrlEdited ? 
    <input 
      placeholder="Icon URL:"
      type="text"
      key="icon-url"
      value={this.props.icon_url}
      onChange={(ev)=>this.props.onUpdate({icon_url: ev.target.value})}/> :
    <img
      alt="X"
      src={this.props.icon_url} 
      role="presentation" 
      className="embed-author-icon"
      onClick={()=>this.setState({isIconUrlEdited: true})}/>;
  }

  renderUrlPrompt(){
    return this.state.isUrlEdited ?
      <input
        key="url"
        type="text"
        placeholder="Name URL:"
        value={this.props.url}
        onChange={(ev)=>this.props.onUpdate({url: ev.target.value})}
      /> :
      <button onClick={()=>this.setState({isUrlEdited: true})}>
        Add URL
      </button>;
  }
  
  renderNamePrompt(){
    return <input
      placeholder="Name:"
      key="name"
      type="text"
      value={this.props.name}
      onChange={(ev)=>this.props.onUpdate({name: ev.target.value})}
    />;
  }
  
  renderLink(){
  return <Link 
    href={this.props.url} 
    className="embed-author-name edit-button-modal-wrapper">
    {this.props.name}
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

  renderName(){
    return <span 
      className="embed-author-name" 
      onClick={()=>this.setState({isEdited: true})}>
      {this.props.name}
    </span>;
  }

  renderNameSpan(){
    return this.state.isEdited ?
    <span className="embed-author-name">
      {this.renderNamePrompt()}
      {this.renderUrlPrompt()}
    </span> :
    (this.props.url.length>0) ?
    this.renderLink() :
    this.renderName()
  }

  render(){
    return <div 
      className="embed-author">
      <div className="embed-author-input">
        {this.renderIcon()}
      </div>
      <div className="embed-author-input">
        {this.renderNameSpan()}
      </div>
    </div>;
  }  
}

export default onClickOutside(EmbedAuthor)