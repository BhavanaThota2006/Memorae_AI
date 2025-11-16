import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PeachBlob from '../components/PeachBlob';
import pImage from '../components/p.jpg';
import pen from '../asset/pen.jpg';
import pro from '../asset/pro.jpg';

const faqs = [
  { q: 'What is Memorae?', a: 'A modern way to store, organize, and recall your knowledge & ideas beautifully.' },
  { q: 'Can I use Memorae for teams?', a: 'Yes! Our Pro plan offers team spaces and collaboration.' },
  { q: 'How secure is my data?', a: 'Your data is encrypted; privacy is a core Memorae value.' },
  { q: 'How can I collaborate with others?', a: 'You can collaborate with others by inviting them to your spaces.' },
];

const steps = [
  { title: 'Register', desc: 'Sign up swiftly in one click.' },
  { title: 'Create Spaces', desc: 'Build digital peach spaces for your ideas.' },
  { title: 'Organize & Recall', desc: 'Relate memories and recall with AI.' },
];

const features = [
  { title: 'Visual Mind Maps', desc: 'Craft peachy knowledge visually.' },
  { title: 'AI Recall', desc: 'Search notes instantly with AI.' },
  { title: 'Safe & Private', desc: 'Your knowledge stays secure.' },
];

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
  <main style={{ overflow: 'hidden' }}>
    {/* Hero Section */}
    <section style={{
      position: 'relative',
      textAlign: 'center',
      paddingTop: '120px',
      paddingBottom: '80px',
      background: 'linear-gradient(135deg, var(--peach-200), white)',
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <motion.img
        src={pImage}
        alt="Floating decoration"
        style={{
          position: 'absolute',
          top: '50px',
          right: '-100px',
          width: '600px',
          height: '600px',
          objectFit: 'contain',
          pointerEvents: 'none',
          zIndex: 5,
          opacity: 0.7
        }}
        animate={{
          x: [0, -(screenWidth + 600)],
          y: [
            0,
            -30,
            0,
            30,
            0,
            -25,
            0,
            25,
            0,
            -20,
            0,
            20,
            0
          ],
          rotate: [0, 5, -5, 5, -5, 0]
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          },
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          },
          rotate: {
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }
        }}
      />
      <PeachBlob style={{ position: 'absolute', top: '-80px', left: '0', width: '320px', height: '320px', opacity: 0.25 }} className="animate-float" />
      <PeachBlob style={{ position: 'absolute', bottom: '-128px', right: '0', width: '288px', height: '288px', opacity: 0.3 }} color="#FFCBA4" className="animate-float-reverse" />
      <motion.h1
        style={{
          fontSize: '4rem',
          fontWeight: '900',
          background: 'linear-gradient(135deg, #ff6600, #ff8533, #ff944d)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '24px',
          position: 'relative',
          zIndex: 10,
          letterSpacing: '-0.02em',
          textShadow: '0 4px 12px rgba(255, 150, 0, 0.2)'
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Mindful Knowledge Storage
      </motion.h1>
      <motion.p
        style={{ fontSize: '1.25rem', color: '#404040', marginBottom: '40px', position: 'relative', zIndex: 10 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Organize, remember and grow your ideas beautifully.
      </motion.p>
      <motion.div
        style={{ position: 'relative', zIndex: 10 }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
      >
        <Link
          to="/register"
          style={{
            background: 'var(--peach-500)',
            color: 'white',
            padding: '12px 32px',
            borderRadius: '25px',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            display: 'inline-block',
            transition: 'background 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.background = 'var(--peach-600)'}
          onMouseLeave={(e) => e.target.style.background = 'var(--peach-500)'}
        >
          Get Started
        </Link>
      </motion.div>
    </section>

    {/* How it Works Section */}
    <section style={{ padding: '150px 20px', background: 'white', position: 'relative' }}>
      <h2 style={{
        fontSize: '3rem',
        fontWeight: '700',
        textAlign: 'center',
        color: '#ff751a',
        marginBottom: '40px',
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        <span style={{
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '4px',
          background: 'linear-gradient(90deg, #ff6600, #ff944d)',
          borderRadius: '2px'
        }}></span>
        How It Works
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '48px', padding: '0 16px' }}>
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'var(--peach-50)',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              width: '280px'
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
             whileHover={{ transform: 'translateY(-8px)', boxShadow: '0 8px 12px rgba(0,0,0,0.15)'}}
          >
           <img src={pen} alt="Memorae" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>{step.title}</h3>
            <p style={{ color: '#4a4a4a', textAlign: 'center' }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Features Section */}
    <section style={{ padding: '150px 20px', background: 'var(--peach-100)' }}>
      <h2 style={{
        fontSize: '3.5rem',
        fontWeight: '800',
        textAlign: 'center',
        color: '#ff8533',
        marginBottom: '32px',
        textDecorationColor: '#ffb380',
        textDecorationThickness: '3px',
        textUnderlineOffset: '12px'
      }}>
        Product Features
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, type: 'spring' }}
            whileHover={{ transform: 'translateY(-8px)', boxShadow: '0 8px 12px rgba(0,0,0,0.15)'}}
          >
            <img src={pro} alt="Memorae" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>{feature.title}</h3>
            <p style={{ color: '#4a4a4a', textAlign: 'center' }}>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Pricing Teaser Section */}
    <section style={{ padding: '80px 20px', background: 'white', textAlign: 'center' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '900',
        color: '#ff6600',
        marginBottom: '16px',
        textShadow: '2px 2px 4px rgba(255, 150, 0, 0.3)',
        letterSpacing: '0.03em'
      }}>Pricing</h2>
      <p style={{ color: '#404040', marginBottom: '24px' }}>Simple, transparent plans for every user.</p>
      <Link
        to="/pricing"
        style={{
          background: 'var(--peach-500)',
          color: 'white',
          borderRadius: '25px',
          padding: '12px 32px',
          fontWeight: '600',
          fontSize: '1.125rem',
          textDecoration: 'none',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          display: 'inline-block',
          transition: 'background 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.background = 'var(--peach-600)'}
        onMouseLeave={(e) => e.target.style.background = 'var(--peach-500)'}
      >
        View Plans
      </Link>
    </section>

    {/* FAQ Section */}
    <section style={{ padding: '120px 20px', background: 'var(--peach-100)', position: 'relative', overflow: 'hidden' }}>
      <PeachBlob style={{ position: 'absolute', left: '0', top: '-48px', width: '256px', height: '256px', opacity: 0.1 }} className="animate-float" />
      <h2 style={{
        fontSize: '3rem',
        fontWeight: '700',
        color: '#ff8533',
        textAlign: 'center',
        marginBottom: '50px',
        fontStyle: 'italic',
        textDecorationThickness: '3px',
        textUnderlineOffset: '15px',
        letterSpacing: '0.02em',
        position: 'relative',
        zIndex: 10
      }}>
        Frequently Asked Questions
      </h2>
      <div style={{ maxWidth: '896px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {faqs.map((f, i) => (
          <motion.div
            key={f.q}
            style={{
              background: 'var(--peach-50)',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              marginBottom: '20px',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            onMouseEnter={(e) => e.target.style.background = 'var(--peach-100)'}
            onMouseLeave={(e) => e.target.style.background = 'var(--peach-50)'}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            whileHover={{ transform: 'translateX(4px)', boxShadow: '0 4px 8px rgba(0,0,0,0.15)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PeachBlob style={{ width: '32px', height: '32px', marginRight: '12px' }} />
              <div style={{ fontWeight: '600', color: '#000000', fontSize: '1.125rem' }}>{f.q}</div>
            </div>
            <div style={{
              transition: 'all 0.5s ease',
              maxHeight: openFaq === i ? '200px' : '0',
              marginTop: openFaq === i ? '12px' : '0',
              opacity: openFaq === i ? 1 : 0,
              overflow: 'hidden'
            }}>
              <div style={{ color: '#404040' }}>{f.a}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link
          to="/faq"
          style={{
            color: '#ff6600',
            fontWeight: '600',
            textDecoration: 'underline',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#ff8533'}
          onMouseLeave={(e) => e.target.style.color = '#ff6600'}
        >
          View All FAQs →
        </Link>
      </div>
    </section>

    {/* Contact Section */}
    <section style={{
      padding: '120px 20px',
      background: 'var(--peach-50)',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
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
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--peach-600)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'var(--peach-500)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
        >
          <span>Send Message</span>
          <span style={{ marginLeft: '8px' }} role="img" aria-label="peach">🍑</span>
        </button>
      </motion.form>
    </section>
  </main>
  );
};

export default Home;
