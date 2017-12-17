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
      let content = (({url, title})=>({url, title}))(this.state)
      this.props.onUpdate(content)
      this.setState({isUrlEdited: false, isEdited: false})
    }
  }

  render(){
    const placeholder = {
      title: 'title, turns blue and is clickable if you specify url',
      url: 'https://discordapp.com'
    }

    let urlContent = this.state.isUrlEdited?
      <input key="url" type="text" placeholder={placeholder.url} value={this.state.url}
        onChange={(ev)=>this.setState({url: ev.target.value})}>
      </input>
    :<button key="urlButton" onClick={()=>this.setState({isUrlEdited: true})}>
        Add URL
      </button>

    let content = this.state.isEdited?[
      <input key="title" type="text" placeholder={placeholder.title} onChange={(ev)=>this.setState({title: ev.target.value})}>
      </input>,
      urlContent
    ]
      :this.props.parsedTitle
  
    return (this.state.url.length>0)?
      <Link href={this.props.url} className="embed-title" onClick={()=>this.setState({isEdited: true})}>
        {content}
      </Link>
      :<div className="embed-title" onClick={()=>this.setState({isEdited: true})}>
        {content}
      </div>;
  };
}

export default onClickOutside(EmbedTitle)