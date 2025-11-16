import React from 'react';

const Card = ({ children, ...props }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} {...props}>
      {children}
    </div>
  );
};

export default Card;