import React from 'react';

const EmbedThumbnail = ({ url }) => {
  //url: 'https://cdn.discordapp.com/embed/avatars/0.png'
    if (!url) {
      return null;
    }
  
    return (
      <img
        src={url}
        role="presentation"
        className="embed-rich-thumb"
        style={{ maxWidth: 80, maxHeight: 80 }}
      />
    );
  };

export default EmbedThumbnail