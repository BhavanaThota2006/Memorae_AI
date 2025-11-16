import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ddd' }}>
          <button
            onClick={() => toggle(index)}
            aria-expanded={activeIndex === index}
            style={{ width: '100%', padding: '10px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
          >
            {item.title}
          </button>
          {activeIndex === index && <div style={{ padding: '10px' }}>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;