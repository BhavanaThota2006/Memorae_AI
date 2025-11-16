import React from 'react';
import { motion } from 'framer-motion';
import PeachBlob from '../components/PeachBlob';
import pro from '../asset/pro.jpg';

const features = [
  {
    title: 'Visual Mind Maps',
    desc: 'Easily craft and connect your knowledge visually with elegant peachy diagrams.'
  },
  {
    title: 'AI Recall',
    desc: 'Powerful search lets you recall any note or idea instantly using smart AI.'
  },
  {
    title: 'Works Everywhere',
    desc: 'Access Memorae on web or mobile, seamlessly and securely.'
  },
  {
    title: 'Safe & Private',
    desc: 'Enjoy bank-grade security and privacy-first design.'
  },
  {
    title: 'Collaborative',
    desc: 'Create workspaces and invite collaborators with one click.'
  }
];

export default function Features() {
  return (
    <main style={{ overflow: 'hidden', minHeight: '100vh' }}>
      <section style={{
        position: 'relative',
        padding: '112px 24px',
        background: 'var(--peach-100)'
      }}>
        <PeachBlob style={{ position: 'absolute', top: '-64px', left: '0', width: '256px', height: '256px', opacity: 0.1 }} className="animate-float" />
        <PeachBlob style={{ position: 'absolute', bottom: '-64px', right: '0', width: '256px', height: '256px', opacity: 0.15 }} color="#FFCBA4" className="animate-float-reverse" />
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          color: '#ff751a',
          textAlign: 'center',
          marginBottom: '56px',
          fontStyle: 'italic',
          textShadow: '3px 3px 6px rgba(255, 150, 0, 0.25)',
          letterSpacing: '0.1em',
          border: '3px solid #ffb380',
          borderRadius: '20px',
          padding: '20px 540px',
          display: 'inline-block',
          background: 'linear-gradient(135deg, rgba(255, 200, 180, 0.3), rgba(255, 228, 196, 0.3))',
          backdropFilter: 'blur(10px)'
        }}>
          Features
        </h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '56px',
          maxWidth: '1536px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              style={{
                background: 'white',
                borderRadius: '24px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ transform: 'translateY(-8px)', boxShadow: '0 8px 12px rgba(0,0,0,0.15)' }}
            >
              
              <img src={pro} alt="Memorae" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
             
              <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>{feature.title}</h2>
              <p style={{ color: '#4a4a4a', textAlign: 'center' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
