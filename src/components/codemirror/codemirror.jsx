import React from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash.debounce';

import CM from 'codemirror';
import 'codemirror/lib/codemirror.css';

// generally you'd want to leave these up to the caller
// but we don't care about generalizing
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/mode/javascript/javascript';

import Ajv from 'ajv';
import {
  botMessageSchema,
  webhookMessageSchema,
  registerKeywords,
  stringifyErrors
} from 'lib/validation';


const ajv = registerKeywords(new Ajv({ allErrors: true }));
const validators = {
  regular: ajv.compile(botMessageSchema),
  webhook: ajv.compile(webhookMessageSchema)
};


const convertLineEndings = (str) => {
  if (!str) return str;
  return str.replace(/\r\n?/g, '\n');
};

const CodeMirror = React.createClass({
  getDefaultProps() {
    return {
      className: 'w-100 h-100',
      options: {
        mode: { name: 'javascript', json: true },
        autoCloseBrackets: true,
        matchBrackets: true,
        tabSize: 2,
        extraKeys: {
          // see https://github.com/codemirror/CodeMirror/issues/988
          Tab: function(cm) {
            if (cm.somethingSelected()) {
              cm.indentSelection('add');
              return;
            }

            cm.execCommand("insertSoftTab");
          }
        },
        viewportMargin: Infinity,
        theme: 'one-dark'
      },
      preserveScrollPosition: false
    };
  },

  validateInput(input, webhookMode=false) {
    let parsed, parseError, isValid, validationError;
    const validator = webhookMode ? validators.webhook : validators.regular;

    try {
      parsed = JSON.parse(input);
      isValid = validator(parsed);
      validationError = stringifyErrors(parsed, validator.errors);
    } catch (e) {
      parseError = e.message;
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
    return {isValid, parsed, error}
  },

  componentDidMount() {
    const textarea = ReactDOM.findDOMNode(this.textarea);
    this.instance = CM.fromTextArea(textarea, this.props.options);
    this.instance.on('change', this.valueChanged);
    this.focus();
  },

  componentWillMount() {
    this.componentWillReceiveProps = debounce(this.componentWillReceiveProps, 0);
  },

  componentWillUnmount() {
    if (this.instance) this.instance.toTextArea();
  },

  componentWillReceiveProps(next) {
    if (this.instance &&
        next.value !== undefined &&
        convertLineEndings(this.instance.getValue()) !== convertLineEndings(next.value)) {
      if (this.props.preserveScrollPosition) {
        const previous = this.instance.getScrollInfo();
        this.instance.setValue(next.value);
        this.instance.scrollTo(previous.left, previous.top);
      } else {
        this.instance.setValue(next.value);
      }
    }

    if (typeof next.options === 'object') {
      Object.keys(next.options).forEach(key => {
        this.instance.setOption(key, next.options[key]);
      });
    }

    // silly
    if (next.theme) {
      this.instance.setOption('theme', next.theme);
    }
  },

  valueChanged(instance, change) {
    const currentValue = this.instance.getValue()
    const {isValid, parsed, error} = this.validateInput(currentValue)
    this.props.updateError(error)
    if (this.props.onChange && change.origin !== 'setValue' && isValid) {
      this.props.onChange(parsed, change);
    }
  },

  render() {
    return (
      <div className={this.props.className}>
        <textarea readOnly 
          ref={(textarea) => this.textarea = textarea}
          value={this.props.value}
          autoComplete="off"
        />
      </div>
    );
  },

  focus() { if (this.instance) this.instance.focus(); },

});


export default CodeMirror;
