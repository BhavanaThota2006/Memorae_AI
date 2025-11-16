import React from 'react';
import { motion } from 'framer-motion';
import PeachBlob from '../components/PeachBlob';
import qImage from '../components/q.jpg';
import price from '../asset/price.jpg';

const plans = [
  { name: 'Free', price: '$0', details: ['Basic Notes', 'Unlimited Spaces', 'Mobile App'], color: '#FFDAB9' },
  { name: 'Plus', price: '$8', details: ['AI Recall', 'Collaboration', 'Priority Support'], color: '#FFCBA4', best: true },
  { name: 'Pro', price: '$16', details: ['All Features', 'Team Workspaces', 'API Access'], color: '#FFB38A' },
  { name: 'Enterprise', price: '$24', details: ['All Features', 'Team Workspaces', 'API Access'], color: '#FFB38A' },
  { name: 'Custom', price: 'Contact Us', details: ['All Features', 'Team Workspaces', 'API Access'], color: '#FFB38A' },
];

export default function Pricing() {
  return (
    <main style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <section style={{
        padding: '112px 16px',
        backgroundImage: `url(${qImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.85)',
          zIndex: 1
        }}></div>
        <PeachBlob style={{ position: 'absolute', left: '0', top: '-144px', width: '256px', height: '256px', opacity: 0.15, zIndex: 2 }} className="animate-float" />
        <PeachBlob style={{ position: 'absolute', right: '0', bottom: '-96px', width: '256px', height: '256px', opacity: 0.2, zIndex: 2 }} color="#FFCBA4" className="animate-float-reverse" />
        <h1
          className="gradient-animated"
          style={{
            fontSize: '3.75rem',
            fontWeight: '900',
            background: 'linear-gradient(45deg, #ff6600, #ff8533, #ff944d, #ff6600)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center',
            marginBottom: '64px',
            position: 'relative',
            zIndex: 3,
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          Pricing
        </h1>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          justifyContent: 'center',
          gap: '48px',
          padding: '0 16px',
          position: 'relative',
          zIndex: 3
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              style={{
                position: 'relative',
                background: 'var(--peach-50)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                width: '320px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                ...(plan.best ? { transform: 'scale(1.05)', border: '4px solid var(--peach-300)' } : {})
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.14, type: 'spring', duration: 0.8 }}
              whileHover={{ transform: 'translateY(-8px)', boxShadow: '0 8px 12px rgba(0,0,0,0.15)'}}
            >
              <img src={price} alt="Memorae" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000000', marginBottom: '8px' }}>{plan.name}</h2>
              <div style={{ fontSize: '1.875rem', fontWeight: '800', marginBottom: '12px', color: '#1a1a1a' }}>
                {plan.price} <span style={{ fontSize: '1.125rem', fontWeight: 'normal', color: '#666666' }}>/mo</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', textAlign: 'center' }}>
                {plan.details.map((item) => (
                  <li key={item} style={{ color: '#404040', marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
              <button
                style={{
                  marginTop: 'auto',
                  padding: '12px 28px',
                  background: 'var(--peach-500)',
                  color: 'white',
                  borderRadius: '25px',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = 'var(--peach-600)'}
                onMouseLeave={(e) => e.target.style.background = 'var(--peach-500)'}
              >
                Start Now
              </button>
              {plan.best && (
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'var(--peach-300)',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    padding: '4px 16px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.55 }}
                >
                  Best Value
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
