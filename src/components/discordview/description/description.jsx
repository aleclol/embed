import React from 'react';
import {parseAllowLinks} from 'lib/markdown'

const EmbedDescription = ({ content }) => {
  let placeholder =  'this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```'
    if (!content) {
      return null;
    }
  
    return <div className="embed-description markup">{parseAllowLinks(content)}</div>;
  };

export default EmbedDescription