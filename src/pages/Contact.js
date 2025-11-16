import React from 'react';
import { motion } from 'framer-motion';
import PeachBlob from '../components/PeachBlob';

export default function Contact() {
  return (
    <main style={{
      padding: '128px 20px',
      background: 'var(--peach-50)',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      <PeachBlob
        color="#FFCBA4"
        style={{ position: 'absolute', right: '40px', top: '40px', width: '192px', height: '192px', opacity: 0.15 }}
        className="animate-float"
      />
      <motion.form
        style={{
          background: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '576px',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column'
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{
          fontSize: '2.25rem',
          fontWeight: '900',
          marginBottom: '32px',
          color: '#ff6600',
          textAlign: 'center',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          borderTop: '3px solid #ffb380',
          borderBottom: '3px solid #ffb380',
          padding: '15px 0',
          textShadow: '2px 2px 4px rgba(255, 150, 0, 0.2)'
        }}>
          Contact & Support
        </h2>
        <input
          placeholder="Your Email"
          type="email"
          required
          style={{
            marginBottom: '16px',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '2px solid var(--peach-100)',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.3s'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--peach-400)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--peach-100)'}
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          required
          style={{
            marginBottom: '16px',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '2px solid var(--peach-100)',
            fontSize: '1rem',
            outline: 'none',
            resize: 'vertical',
            transition: 'border-color 0.3s'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--peach-400)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--peach-100)'}
        />
        <button
          type="submit"
          style={{
            background: 'var(--peach-500)',
            color: 'white',
            borderRadius: '25px',
            fontWeight: '600',
            padding: '12px',
            marginTop: '16px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'background 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => e.target.style.background = 'var(--peach-600)'}
          onMouseLeave={(e) => e.target.style.background = 'var(--peach-500)'}
        >
          <span>Send Message</span>
          <span style={{ marginLeft: '8px' }} role="img" aria-label="peach">🍑</span>
        </button>
      </motion.form>
    </main>
  );
}
