import React from 'react';
import { motion } from 'framer-motion';
import PeachBlob from '../components/PeachBlob';

export default function Register() {
  return (
    <main style={{
      padding: '128px 20px',
      background: 'var(--peach-50)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <PeachBlob
        color="#FFCBA4"
        style={{ position: 'absolute', left: '0', top: '80px', width: '320px', height: '320px', opacity: 0.2 }}
        className="animate-float"
      />
      <motion.form
        style={{
          background: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '448px',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column'
        }}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          marginBottom: '32px',
          background: 'linear-gradient(135deg, #ff751a, #ff8533)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center',
          letterSpacing: '0.05em',
          textShadow: '0 2px 8px rgba(255, 150, 0, 0.2)'
        }}>
          Sign Up
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
        <input
          placeholder="Password"
          type="password"
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
            transition: 'background 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.background = 'var(--peach-600)'}
          onMouseLeave={(e) => e.target.style.background = 'var(--peach-500)'}
        >
          Create Account
        </button>
        <p style={{ marginTop: '24px', color: '#404040', textAlign: 'center' }}>
          Already have an account? <a href="/login" style={{ color: '#1a1a1a', fontWeight: 'bold', textDecoration: 'underline' }}>Sign In</a>
        </p>
      </motion.form>
    </main>
  );
}
