import React, { useEffect } from 'react';

const Toast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', background: 'var(--success)', color: 'white', padding: '10px', borderRadius: '4px', zIndex: 1000 }}>
      {message}
      <button onClick={onClose} style={{ marginLeft: '10px', background: 'none', border: 'none', color: 'white' }}>×</button>
    </div>
  );
};

export default Toast;