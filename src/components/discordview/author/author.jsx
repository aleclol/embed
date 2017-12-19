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
      name: '',
      iconUrl: '',
      url: ''
    }
  }

  handleClickOutside = ev => {
      if (this.state.isEdited && this.state.name.length>0){
        let {name, url, iconUrl} = this.state
        this.props.onUpdate({name, url, iconUrl})
        this.setState({isUrlEdited: false, isEdited: false})
      }
      if (this.state.isIconUrlEdited && this.state.iconUrl.length>0){
        let {name, url, iconUrl} = this.state
        this.props.onUpdate({name, url, iconUrl})
        this.setState({isIconUrlEdited: false})
      }
  }

  renderIcon(){
    return this.state.isIconUrlEdited ? 
    <input 
      placeholder="Icon URL:"
      type="text"
      key="icon-url"
      value={this.state.iconUrl}
      onChange={(ev)=>this.setState({iconUrl: ev.target.value})}/> :
    <img
      alt="X"
      src={this.state.iconUrl} 
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
        value={this.state.url}
        onChange={(ev)=>this.setState({url: ev.target.value})}
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
      value={this.state.name}
      onChange={(ev)=>this.setState({name: ev.target.value})}
    />;
  }
  
  renderLink(){
  return <Link 
    href={this.state.url} 
    className="embed-author-name edit-button-modal-wrapper">
    {this.state.name}
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
      {this.state.name}
    </span>;
  }

  renderNameSpan(){
    return this.state.isEdited ?
    <span className="embed-author-name">
      {this.renderNamePrompt()}
      {this.renderUrlPrompt()}
    </span> :
    (this.state.url.length>0) ?
    this.renderLink() :
    this.renderName()
  }

  render(){
    return <div className="embed-author">{this.renderIcon()}{this.renderNameSpan()}</div>;
  }  
}

export default onClickOutside(EmbedAuthor)