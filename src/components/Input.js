import React from 'react';

const Input = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input style={{ width: '100%', padding: '10px', margin: '5px 0' }} {...props} />
    </div>
  );
};

export default Input;