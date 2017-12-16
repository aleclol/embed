import React from 'react';
import EmbedField from './field'

const EmbedFields = ({ fields }) => {

  const initFields = [
    { name: 'one', value: 'Inline fields are next to each other.\nAs you can see.', inline: true },
    { name: 'two', value: 'Also, you can only\n Have up to 3 inline fields', inline: true },
    { name: 'three', value: 'This one is not inline.', inline: false },

  ]

    if (!fields) {
      return null;
    }
  
    return <div className="embed-fields">{fields.map((f, i) => <EmbedField key={i} {...f} />)}</div>;
  };

export default EmbedFields