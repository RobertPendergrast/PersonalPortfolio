import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <div id={id} className="section">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
