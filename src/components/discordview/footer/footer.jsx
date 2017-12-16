import React from 'react';
import Moment from 'moment';

const EmbedFooter = ({ timestamp, text, icon_url }) => {
  const placeholder = {
    text: "This is footer. you can specify icon_url",
    icon_url: "http://img15.deviantart.net/8746/i/2014/011/c/8/sengoku_nadeko___snake_god_by_phluxxor-d6xy7mm.png"
  }


    if (!text && !timestamp) {
      return null;
    }
  
    // pass null, since undefined will make moment(...) return the current date/time
    let time = Moment(timestamp !== undefined ? timestamp : null);
    time = time.isValid() ? time.format('ddd MMM Do, YYYY [at] h:mm A') : null;
  
    const footerText = [text, time].filter(Boolean).join(' | ');
    const footerIcon = text && icon_url ? (
      <img src={icon_url} className="embed-footer-icon" role="presentation" width="20" height="20" />
    ) : null;
  
    return <div>{footerIcon}<span className="embed-footer">{footerText}</span></div>;
  };

export default EmbedFooter