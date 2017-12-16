import React from 'react';

const EmbedImage = ({ url }) => {
  //url: 'https://cdn.discordapp.com/embed/avatars/0.png'
    if (!url) {
      return null;
    }
  
    // NOTE: for some reason it's a link in the original DOM
    // not sure if this breaks the styling, probably does
    return <a className="embed-thumbnail embed-thumbnail-rich"><img className="image" role="presentation" src={url} /></a>;
  };

export default EmbedImage