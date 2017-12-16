import React from 'react';

const EmbedColorPill = ({ color }) => {
  //color: Math.floor(Math.random() * 0xFFFFFF),
    let computed;
  
    if (color) {
      const r = (color >> 16) & 0xFF;
      const g = (color >> 8) & 0xFF;
      const b = color & 0xFF;
      computed = `rgba(${r},${g},${b},1)`;
    }
  
    const style = { backgroundColor: computed !== undefined ? computed : '' };
    return <div className="embed-color-pill" style={style} />;
  }

export default EmbedColorPill