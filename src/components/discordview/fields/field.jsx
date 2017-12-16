import React from 'react';
import { parseEmbedTitle, parseAllowLinks } from 'lib/markdown'

const EmbedField = ({ name, value, inline }) => {
    if (!name && !value) {
      return null;
    }
  
    const cls = 'embed-field' + (inline ? ' embed-field-inline' : '');
  
    const fieldName = name ? (<div className="embed-field-name">{parseEmbedTitle(name)}</div>) : null;
    const fieldValue = value ? (<div className="embed-field-value markup">{parseAllowLinks(value)}</div>) : null;
  
    return <div className={cls}>{fieldName}{fieldValue}</div>;
  };

export default EmbedField