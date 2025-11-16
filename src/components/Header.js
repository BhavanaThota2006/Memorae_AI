import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import image from './image.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        background: 'white',
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring' }}
    >
      <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1.75rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #ff6600, #ff8533, #ff944d, #ff8533, #ff6600)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transition: 'all 0.4s ease',
            fontFamily: "'Satisfy', cursive",
            position: 'relative',
            animation: 'gradientShift 4s ease infinite'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.filter = 'drop-shadow(0 4px 8px rgba(255, 150, 0, 0.4))';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.filter = 'none';
          }}
        >
          <img
            src={image}
            alt="Memorae"
            style={{
              width: '44px',
              height: '44px',
              objectFit: 'contain',
              transition: 'transform 0.4s ease',
              filter: 'drop-shadow(0 2px 4px rgba(255, 150, 0, 0.3))'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'rotate(10deg) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'rotate(0deg) scale(1)';
            }}
          />
          <span style={{
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(255, 150, 0, 0.2)'
          }}>
            Memorae
          </span>
        </Link>
        <ul style={{ display: isDesktop ? 'flex' : 'none', listStyle: 'none', gap: '12px', alignItems: 'center', margin: 0, padding: 0 }}>
          <li>
            <Link
              to="/how-it-works"
              style={{
                padding: '10px 20px',
                textDecoration: 'none',
                color: '#2d2d2d',
                fontWeight: '600',
                borderRadius: '25px',
                background: 'transparent',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--peach-100)';
                e.target.style.borderColor = 'var(--peach-300)';
                e.target.style.color = 'var(--peach-800)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(255, 150, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.color = '#2d2d2d';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              How it Works
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              style={{
                padding: '10px 20px',
                textDecoration: 'none',
                color: '#2d2d2d',
                fontWeight: '600',
                borderRadius: '25px',
                background: 'transparent',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--peach-100)';
                e.target.style.borderColor = 'var(--peach-300)';
                e.target.style.color = 'var(--peach-800)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(255, 150, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.color = '#2d2d2d';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              style={{
                padding: '10px 20px',
                textDecoration: 'none',
                color: '#2d2d2d',
                fontWeight: '600',
                borderRadius: '25px',
                background: 'transparent',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--peach-100)';
                e.target.style.borderColor = 'var(--peach-300)';
                e.target.style.color = 'var(--peach-800)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(255, 150, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.color = '#2d2d2d';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              style={{
                padding: '10px 20px',
                textDecoration: 'none',
                color: '#2d2d2d',
                fontWeight: '600',
                borderRadius: '25px',
                background: 'transparent',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--peach-100)';
                e.target.style.borderColor = 'var(--peach-300)';
                e.target.style.color = 'var(--peach-800)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(255, 150, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.color = '#2d2d2d';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                padding: '10px 20px',
                textDecoration: 'none',
                color: '#2d2d2d',
                fontWeight: '600',
                borderRadius: '25px',
                background: 'transparent',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--peach-100)';
                e.target.style.borderColor = 'var(--peach-300)';
                e.target.style.color = 'var(--peach-800)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(255, 150, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.color = '#2d2d2d';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            to="/register"
            style={{
              background: 'var(--peach-500)',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              marginRight: '10px',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              fontSize: '0.95rem',
              boxShadow: '0 2px 4px rgba(255, 150, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--peach-600)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(255, 150, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--peach-500)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 4px rgba(255, 150, 0, 0.2)';
            }}
          >
            Sign Up
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: !isDesktop ? 'block' : 'none', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }} aria-label="Toggle menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {menuOpen && (
          <ul style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'white',
            listStyle: 'none',
            padding: '16px',
            margin: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            borderRadius: '0 0 12px 12px'
          }}>
            {['how-it-works', 'features', 'pricing', 'faq', 'contact'].map((path, index) => (
              <li key={path} style={{ marginBottom: '8px' }}>
                <Link
                  to={`/${path}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    textDecoration: 'none',
                    color: '#2d2d2d',
                    fontWeight: '600',
                    borderRadius: '12px',
                    background: 'transparent',
                    border: '2px solid transparent',
                    transition: 'all 0.3s ease',
                    fontSize: '0.95rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--peach-100)';
                    e.target.style.borderColor = 'var(--peach-300)';
                    e.target.style.color = 'var(--peach-800)';
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = 'transparent';
                    e.target.style.color = '#2d2d2d';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;