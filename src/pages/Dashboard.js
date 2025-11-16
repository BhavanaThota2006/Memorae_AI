import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PeachBlob from '../components/PeachBlob';

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{
      padding: '112px 32px',
      background: 'var(--peach-100)',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '48px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <PeachBlob style={{ position: 'absolute', top: '0', left: '0', width: '256px', height: '256px', opacity: 0.1 }} className="animate-float" />
      <motion.h1
        style={{
          position: 'absolute',
          top: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '2.5rem',
          fontWeight: '900',
          background: 'linear-gradient(135deg, #ff6600, #ff8533)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center',
          letterSpacing: '0.05em',
          zIndex: 10
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dashboard
      </motion.h1>
      <motion.aside
        style={{
          background: 'var(--peach-50)',
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          padding: '32px',
          minWidth: '220px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          position: 'relative',
          zIndex: 10
        }}
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div style={{ color: '#000000', fontWeight: 'bold', marginBottom: '24px' }}>Spaces</div>
        <div style={{ fontWeight: '600', color: '#2d2d2d', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#1a1a1a'} onMouseLeave={(e) => e.target.style.color = '#2d2d2d'}>Personal</div>
        <div style={{ fontWeight: '600', color: '#2d2d2d', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#1a1a1a'} onMouseLeave={(e) => e.target.style.color = '#2d2d2d'}>Work</div>
        <div style={{ fontWeight: '600', color: '#2d2d2d', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#1a1a1a'} onMouseLeave={(e) => e.target.style.color = '#2d2d2d'}>Shared</div>
      </motion.aside>
      <motion.section
        style={{
          flex: 1,
          position: 'relative',
          zIndex: 10
        }}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '32px',
          marginBottom: '40px'
        }}>
          <div style={{
            flex: 1,
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: '32px'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1a1a1a', fontSize: '1.125rem', marginBottom: '8px' }}>Today's Notes</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Peach shape inspirations 🍑</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Refactor animation code</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Call with team 14:00</li>
            </ul>
          </div>
          <div style={{
            flex: 1,
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: '32px'
          }}>
            <div style={{ fontWeight: 'bold', color: '#1a1a1a', fontSize: '1.125rem', marginBottom: '8px' }}>Quick Links</div>
            <button style={{
              width: '100%',
              marginBottom: '8px',
              padding: '8px',
              background: 'var(--peach-200)',
              borderRadius: '8px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }} onMouseEnter={(e) => e.target.style.background = 'var(--peach-300)'} onMouseLeave={(e) => e.target.style.background = 'var(--peach-200)'}>
              Create New Note
            </button>
            <button style={{
              width: '100%',
              marginBottom: '8px',
              padding: '8px',
              background: 'var(--peach-200)',
              borderRadius: '8px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }} onMouseEnter={(e) => e.target.style.background = 'var(--peach-300)'} onMouseLeave={(e) => e.target.style.background = 'var(--peach-200)'}>
              Invite Member
            </button>
          </div>
        </div>
        <div style={{
          background: 'var(--peach-50)',
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          padding: '32px'
        }}>
          <div style={{ fontWeight: 'bold', color: '#1a1a1a', fontSize: '1.125rem', marginBottom: '16px' }}>Recent Activity</div>
          <div style={{ display: 'flex', gap: '32px', overflowX: 'auto' }}>
            <div style={{ background: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', minWidth: '180px' }}>📄 Meeting notes</div>
            <div style={{ background: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', minWidth: '180px' }}>🍑 Peach sketch</div>
            <div style={{ background: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', minWidth: '180px' }}>🔗 Link to blog</div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
