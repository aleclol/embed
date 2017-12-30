import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import visualApp from 'constants/reducers'
import Button from 'components/common/button';
import CodeMirrorContainer from 'components/codemirror';
import ClipboardContainer from 'components/clipboard';
import DiscordView from 'components/discordview/discordview';

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

  updateError(err) {
    this.setState({error: err})
  },

  render() {
    const webhookModeLabel = `${this.state.webhookMode ? 'Dis' : 'En'}able webhook mode`;
    const themeLabel = `${this.state.darkTheme ? 'Light' : 'Dark'} theme`;
    const compactModeLabel = `${this.state.compactMode ? 'Cozy' : 'Compact'} mode`;

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
              <ClipboardContainer/>
              <CodeMirrorContainer
                theme={'one-dark'}
                updateError={this.updateError}
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
