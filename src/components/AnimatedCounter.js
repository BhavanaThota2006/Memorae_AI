import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < target ? prev + 1 : target));
    }, 50);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.div className="bounce-in" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>{count}+</h2>
      <p>{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;