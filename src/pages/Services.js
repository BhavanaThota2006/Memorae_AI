import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { title: 'Green Energy Apps', desc: 'Apps to monitor and optimize energy usage.' },
    { title: 'Sustainable Consulting', desc: 'Expert advice on eco-friendly practices.' },
    { title: 'Eco-Friendly Hardware', desc: 'Devices designed for minimal environmental impact.' },
  ];

  return (
    <main className="container">
      <motion.h1 className="fade-in" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Our Services</motion.h1>
      <div className="grid">
        {services.map((service, index) => (
          <motion.div key={index} className="slide-in" whileHover={{ scale: 1.05 }} style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Services;