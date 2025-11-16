import React from 'react';

const Badge = ({ children, color = 'var(--primary)' }) => {
  return (
    <span style={{ background: color, color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
      {children}
    </span>
  );
};

export default Badge;