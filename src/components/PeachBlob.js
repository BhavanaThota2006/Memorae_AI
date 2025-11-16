import React from 'react';

const PeachBlob = ({ className = '', color = '#FFDAB9', style = {} }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 200 200"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M62.8,-53.4C74.5,-39.3,71.2,-13.7,66.2,11.3C61.1,36.2,54.3,60.6,37.6,69.7C20.9,78.8,-5.8,72.5,-28.4,61.3C-51,50,-69.3,33.7,-73.8,14.6C-78.3,-4.5,-68.9,-26.4,-54.2,-41C-39.5,-55.7,-19.8,-63.1,3.1,-66C26.1,-68.9,52.1,-67.5,62.8,-53.4Z" transform="translate(100 100)" />
  </svg>
);

export default PeachBlob;
