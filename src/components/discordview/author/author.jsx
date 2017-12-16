import React from 'react';
import Link from 'components/common/link'

const EmbedAuthor = ({ name, url, icon_url }) => {
  const placeholder = {
    name: "Author, when editing you can add a url too, and an icon_url",
    url: "https://google.com",
    icon_url: "http://img15.deviantart.net/8746/i/2014/011/c/8/sengoku_nadeko___snake_god_by_phluxxor-d6xy7mm.png"
  }
    if (!name) {
      return null;
    }
  
    let authorName;
    if (name) {
      authorName = <span className="embed-author-name">{name}</span>;
      if (url) {
        authorName = <Link href={url} className="embed-author-name">{name}</Link>;
      }
    }
  
    const authorIcon = icon_url ? (<img src={icon_url} role="presentation" className="embed-author-icon" />) : null;
  
    return <div className="embed-author">{authorIcon}{authorName}</div>;
  };

export default EmbedAuthor