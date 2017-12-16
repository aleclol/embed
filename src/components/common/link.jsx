import React from 'react';

const Link = ({ children, ...props}) => {
  return <a target="_blank" rel="noreferrer" {...props}>{children}</a>;
};

export default Link;
