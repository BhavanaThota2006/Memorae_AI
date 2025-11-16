import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ background: '#333', color: 'white', padding: '10px 0' }}>
      <div className="container grid">
        <div>
          <h3>Sitemap</h3>
          <ul style={{ listStyle: 'none' }}>
            <li><a href="/how-it-works" style={{ color: 'white' }}>How it Works</a></li>
            <li><a href="/features" style={{ color: 'white' }}>Features</a></li>
            <li><a href="/pricing" style={{ color: 'white' }}>Pricing</a></li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul style={{ listStyle: 'none' }}>
            <li><a href="#" style={{ color: 'white' }}>Terms</a></li>
            <li><a href="#" style={{ color: 'white' }}>Privacy</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p>support@recallai.com</p>
        </div>
        <div>
          <div>
            <FaFacebook style={{ margin: '0 50px' }} />
            <FaTwitter style={{ margin: '0 50px' }} />
            <FaLinkedin style={{ margin: '0 50px' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;