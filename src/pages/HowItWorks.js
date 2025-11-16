import React from 'react';
import { motion } from 'framer-motion';
import PeachBlob from '../components/PeachBlob';
import pen from '../asset/pen.jpg';
const steps = [
  { title: 'Register', desc: 'Sign up in one click to start your mindful journey.' },
  { title: 'Create Spaces', desc: 'Craft digital spaces & mind maps for every idea.' },
  { title: 'Recall Instantly', desc: 'Search and navigate memories with AI.' },
  { title: 'Collaborate', desc: 'Add friends or teams to enrich your knowledge.' },
];

export default function HowItWorks() {
  return (
    <main style={{ overflow: 'hidden' }}>
      <section style={{
        position: 'relative',
        padding: '120px 20px',
        background: 'var(--peach-100)',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <PeachBlob style={{ position: 'absolute', left: '-80px', top: '0', width: '288px', height: '288px', opacity: 0.2 }} className="animate-float" />
        <PeachBlob style={{ position: 'absolute', right: '-128px', bottom: '0', width: '320px', height: '320px', opacity: 0.25 }} color="#FFCBA4" className="animate-float-reverse" />
        <h1 style={{
          fontSize: '4rem',
          fontWeight: '900',
          background: 'linear-gradient(180deg, #ff6600, #ff8533, #ff944d)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center',
          marginBottom: '40px',
          position: 'relative',
          zIndex: 10,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          borderBottom: '4px solid #ffb380',
          paddingBottom: '20px',
          display: 'inline-block',
          width: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          How It Works
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', maxWidth: '1200px', position: 'relative', zIndex: 10 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              style={{
                background: 'white',
                borderRadius: '24px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', duration: 0.6 }}
              whileHover={{ transform: 'translateY(-8px)', boxShadow: '0 8px 12px rgba(0,0,0,0.15)'}}
            >
              <img src={pen} alt="Memorae" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '4px' }}>{step.title}</h2>
              <p style={{ color: '#4a4a4a', textAlign: 'center' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
