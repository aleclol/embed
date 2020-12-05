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
   if (this.state.viewType == 2)
      prefix = ".. \"" + vc + "\" ";
    return (
      <div>
        <div className="tabs align-middle">
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
            <button className="cmd-btn cmd-action whitney">Copy JSON</button>
          </CopyToClipboard>
        </div>
      </div>
    )}
}

export default Clipboard