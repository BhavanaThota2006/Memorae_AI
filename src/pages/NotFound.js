import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Go Home</Link>
    </main>
  );
};

export default NotFound;