import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

class Clipboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      viewType: 0,
      viewCommand: "Name"
    }
  }

  render(){
    const typeTabClasses = "type-tab align-middle whitney";

    let prefix = "";
    const vc = this.state.viewCommand;
    if (this.state.viewType == 1)
      prefix = ".acr \"" + vc + "\" ";
    else if (this.state.viewType == 2)
      prefix = ".. \"" + vc + "\" ";
    return (
      <div>
        <div className="tabs align-middle">
          <div 
            className={typeTabClasses + (this.state.viewType == 0 ? " selected" : "")} 
            onClick={() => this.setState({viewType: 0})}>
            None
          </div>
          <div 
            className={typeTabClasses + (this.state.viewType == 1 ? " selected" : "")} 
            onClick={() => this.setState({viewType: 1})}>
            Custom Reaction
          </div>
          <div 
            className={typeTabClasses + (this.state.viewType == 2 ? " selected" : "")} 
            onClick={() => this.setState({viewType: 2})}>
            Quote
          </div>
        </div>,
        <div className="cmd-name">
          <input
            onFocus={(e) => e.target.select()}
            className="cmd-action input"
            hidden={this.state.viewType == 0}
            defaultValue={this.state.viewCommand}
            type="text" placeholder="Name"
            onChange={(e) => this.setState({viewCommand: e.target.value})} />
          <CopyToClipboard text={prefix+this.props.value}>
            <button className="cmd-btn cmd-action whitney">Copy 🔗</button>
          </CopyToClipboard>
        </div>
      </div>
    )}
}

export default Clipboard