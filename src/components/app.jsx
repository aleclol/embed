import React from 'react';

import Button from './button';
import CodeMirror from './codemirror';
import DiscordView from './discordview';
import CopyToClipboard from 'react-copy-to-clipboard';

import Ajv from 'ajv';
import {
  botMessageSchema,
  webhookMessageSchema,
  registerKeywords,
  stringifyErrors
} from '../validation';


const ajv = registerKeywords(new Ajv({ allErrors: true }));
const validators = {
  regular: ajv.compile(botMessageSchema),
  webhook: ajv.compile(webhookMessageSchema)
};

const FooterButton = (props) => {
  return <Button {...props} className='shadow-1 shadow-hover-2 shadow-up-hover' />;
};

const initialCode = JSON.stringify({
  content: 'this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```',
  embed: {
    title: 'title, turns blue and is clickable if you specify url',
    url: 'https://discordapp.com',
    description: 'this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```',
    author: {
      name: "Author, when editing you can add a url too, and an icon_url",
      url: "https://google.com",
      icon_url: "http://img15.deviantart.net/8746/i/2014/011/c/8/sengoku_nadeko___snake_god_by_phluxxor-d6xy7mm.png"
    },
    color: Math.floor(Math.random() * 0xFFFFFF),
    footer: {
      text: "This is footer. you can specify icon_url",
      icon_url: "http://img15.deviantart.net/8746/i/2014/011/c/8/sengoku_nadeko___snake_god_by_phluxxor-d6xy7mm.png"
    },
    thumbnail: { url: 'https://cdn.discordapp.com/embed/avatars/0.png' },
    image: { url: 'https://cdn.discordapp.com/embed/avatars/0.png' },
    fields: [
      { name: 'one', value: 'Inline fields are next to each other.\nAs you can see.', inline: true },
      { name: 'two', value: 'Also, you can only\n Have up to 3 inline fields', inline: true },
      { name: 'three', value: 'This one is not inline.', inline: false },

    ]
  }
}, null, '  ');

const App = React.createClass({
  // TODO: serialize input, webhookMode, compactMode and darkTheme to query string?

  getInitialState() {
    return {
      webhookMode: false,
      compactMode: false,
      darkTheme: true,
      input: initialCode,
      data: {},
      error: null,
      viewType: 0,
      viewCommand: "Name"
    };
  },

  validateInput(input, webhookMode) {
    let parsed, parseError, isValid, validationError;
    const validator = webhookMode ? validators.webhook : validators.regular;

    try {
      parsed = JSON.parse(input);
      isValid = validator(parsed);
      validationError = stringifyErrors(parsed, validator.errors);
    } catch (e) {
      parseError = e.message;
    }

    let data = this.state.data;
    if (isValid) {
      data = parsed;
    }

    let error = '';
    if (parseError) {
      error = parseError;
    } else if (!isValid) {
      error = validationError;
    }

    // we set all these here to avoid some re-renders.
    // maybe it's okay (and if we ever want to
    // debounce validation, we need to take some of these out)
    // but for now that's what we do.
    this.setState({ input, data, error, webhookMode });
  },

  componentWillMount() {
    this.validateInput(this.state.input, this.state.webhookMode);
  },

  onCodeChange(value, change) {
    // for some reason this fires without the value changing...?
    if (value !== this.state.input) {
      this.validateInput(value, this.state.webhookMode);
    }
  },

  toggleWebhookMode() {
    this.validateInput(this.state.input, !this.state.webhookMode);
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

    const input = prefix + this.state.input;
    return (
      <main className="vh-100-l bg-blurple open-sans ">

        <div className="h-100 flex flex-column">
          <section className="flex-l flex-auto">
            <div className="vh-100 h-auto-l w-100 w-50-l pa4 pr3-l pb0-l">
              <DiscordView
                data={this.state.data}
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
                <CopyToClipboard text={input}>
                  <button className="cmd-btn cmd-action">Copy 🔗</button>
                </CopyToClipboard>
              </div>
              <CodeMirror
                value={input}
                theme={'one-dark'}
              />
            </div>
          </section>


          <footer className="w-100 pa3 tc white">
          </footer>
        </div>
      </main>
    );
  },
});


export default App;
