import React from 'react';
import Moment from 'moment';

const MessageTimestamp = React.createClass({
  getInitialState() {
    return { moment: Moment() };
  },

  getDefaultProps() {
    return { compactMode: false };
  },

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000 * 60);
  },

  componentWillUnmount() {
    clearInterval(this.timer);
  },

  tick() {
    this.forceUpdate();
  },

  render() {
    const { compactMode } = this.props;
    const computed = compactMode ? this.state.moment.format('LT') : this.state.moment.calendar();

    return <span className="timestamp">{computed}</span>;
  },
});

export default MessageTimestamp;