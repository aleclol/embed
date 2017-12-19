import React from 'react';
import { TwitterPicker } from 'react-color';

class EmbedColorPill extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isEdited: false,
    }
  }

  handleChangeComplete = (color) => {
    this.props.onUpdate(color.hex)
    this.setState({isEdited: false})
  };
  
/*    if (color) {
      const r = (color >> 16) & 0xFF;
      const g = (color >> 8) & 0xFF;
      const b = color & 0xFF;
      computed = `rgba(${r},${g},${b},1)`;
    }
*/
  render(){
    const style = { backgroundColor: this.props.color };
    return this.state.isEdited ? 
    <TwitterPicker
    color={ this.props.color }
    onChangeComplete={ this.handleChangeComplete }
    /> :
    <div 
    className="embed-color-pill" 
    style={style}
    onClick={()=>this.setState({isEdited: true})}/>;
  }
}
export default EmbedColorPill