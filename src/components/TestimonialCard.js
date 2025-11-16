import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author }) => {
  return (
    <motion.div className="fade-in" whileHover={{ scale: 1.05 }} style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', background: 'white' }}>
      <p>"{quote}"</p>
      <p>- {author}</p>
    </motion.div>
  );
};

export default TestimonialCard;