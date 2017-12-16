import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import visualApp from 'constants/reducers'
import Button from 'components/common/button';
import CodeMirror from 'components/codemirror/codemirror';
import DiscordView from 'components/discordview/discordview';
import CopyToClipboard from 'react-copy-to-clipboard';



let store = createStore(visualApp)

const FooterButton = (props) => {
  return <Button {...props} className='shadow-1 shadow-hover-2 shadow-up-hover' />;
};

const App = React.createClass({
  // TODO: serialize input, webhookMode, compactMode and darkTheme to query string?

  getInitialState() {
    return {
      webhookMode: false,
      compactMode: false,
      darkTheme: true,
      error: null,
      viewType: 0,
      viewCommand: "Name"
    };
  },



  componentWillMount() {
    //this.validateInput(this.state.input, this.state.webhookMode);
  },

  onCodeChange(value, change) {
    // for some reason this fires without the value changing...?
    /*if (value !== this.state.input) {
      this.validateInput(value, this.state.webhookMode);
    }*/
  },

  toggleWebhookMode() {
    //this.validateInput(this.state.input, !this.state.webhookMode);
  },

  toggleTheme() {
    this.setState({ darkTheme: !this.state.darkTheme });
  },

  toggleCompactMode() {
    this.setState({ compactMode: !this.state.compactMode });
  },

  setViewType(n) {
    this.setState({ viewType: n });
  },

  setViewCommand(e) {
    this.setState({ viewCommand: e.target.value });
  },

  render() {
    const webhookModeLabel = `${this.state.webhookMode ? 'Dis' : 'En'}able webhook mode`;
    const themeLabel = `${this.state.darkTheme ? 'Light' : 'Dark'} theme`;
    const compactModeLabel = `${this.state.compactMode ? 'Cozy' : 'Compact'} mode`;
    const typeTabClasses = "type-tab align-middle open-sans";

    var prefix = "";
    const vc = this.state.viewCommand;
    if (this.state.viewType == 1)
      prefix = ".acr \"" + vc + "\" ";
    else if (this.state.viewType == 2)
      prefix = ".. \"" + vc + "\" ";

    //const input = prefix + this.state.input;
    return (
      <Provider store={store}>
      <main className="vh-100-l bg-blurple open-sans ">

        <div className="h-100 flex flex-column">
          <section className="flex-l flex-auto">
            <div className="vh-100 h-auto-l w-100 w-50-l pa4 pr3-l pb0-l">
              <DiscordView
                error={this.state.error}
                webhookMode={this.state.webhookMode}
                darkTheme={this.state.darkTheme}
                compactMode={this.state.compactMode}
              />
            </div>
            <div className="vh-100 h-auto-l w-100 w-50-l pa4 pl3-l pb0">
              <div className="tabs align-middle">
                <div className={typeTabClasses + (this.state.viewType == 0 ? " selected" : "")} onClick={() => this.setViewType(0)}>None</div>
                <div className={typeTabClasses + (this.state.viewType == 1 ? " selected" : "")} onClick={() => this.setViewType(1)}>Custom Reaction</div>
                <div className={typeTabClasses + (this.state.viewType == 2 ? " selected" : "")} onClick={() => this.setViewType(2)}>Quote</div>
              </div>
              <div className="cmd-name">
                <input
                  onFocus={(e) => e.target.select()}
                  className="cmd-action input"
                  hidden={this.state.viewType == 0}
                  defaultValue={this.state.viewCommand}
                  type="text" placeholder="Name"
                  onChange={(e) => this.setViewCommand(e)} />
                <CopyToClipboard>
                  <button className="cmd-btn cmd-action">Copy 🔗</button>
                </CopyToClipboard>
              </div>
              <CodeMirror
                theme={'one-dark'}
              />
            </div>
          </section>


          <footer className="w-100 pa3 tc white">
          </footer>
        </div>
      </main>
      </Provider>
    );
  },
});


export default App;
