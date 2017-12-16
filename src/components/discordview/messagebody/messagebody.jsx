import React from 'react'
import MessageTimestamp from 'components/common/timestamp';

const MessageBody = ({ compactMode, username, content, parsedContent }) => {
  const placeholder = 'this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```'
    if (compactMode) {
      return (
        <div className="markup">
          <MessageTimestamp compactMode={compactMode} />
          <span className="username-wrapper v-btm">
            <strong className="user-name">{username}</strong>
            <span className="bot-tag">BOT</span>
          </span>
          <span className="highlight-separator"> - </span>
          <span className="message-content">{content && parsedContent}</span>
        </div>
      );
    } else if (content) {
      return <div className="markup">{parsedContent}</div>;
    }
    return null;
  };

export default MessageBody