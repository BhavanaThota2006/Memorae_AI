import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PeachBlob from '../components/PeachBlob';

const faqs = [
  { q: 'What is Memorae?', a: 'A modern way to store, organize, and recall your knowledge & ideas beautifully.' },
  { q: 'Can I use Memorae for teams?', a: 'Yes! Our Pro plan offers team spaces and collaboration.' },
  { q: 'How secure is my data?', a: 'Your data is encrypted; privacy is a core Memorae value.' },
  {q: 'How can I collaborate with others?', a: 'You can collaborate with others by inviting them to your spaces.'},
  {q: 'How can I delete my account?', a: 'You can delete your account by going to the settings and clicking on the delete account button.'},
  {q: 'How can I change my password?', a: 'You can change your password by going to the settings and clicking on the change password button.'},
  {q: 'How can I change my email?', a: 'You can change your email by going to the settings and clicking on the change email button.'},
  {q: 'How can I change my username?', a: 'You can change your username by going to the settings and clicking on the change username button.'},
  {q: 'How can I change my profile picture?', a: 'You can change your profile picture by going to the settings and clicking on the change profile picture button.'},
  {q: 'How can I change my profile picture?', a: 'You can change your profile picture by going to the settings and clicking on the change profile picture button.'},
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <main style={{ overflow: 'hidden', minHeight: '100vh', background: 'white', padding: '112px 20px' }}>
      <PeachBlob style={{ position: 'absolute', left: '0', top: '-48px', width: '256px', height: '256px', opacity: 0.1 }} className="animate-float" />
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '700',
        color: '#ff8533',
        textAlign: 'center',
        marginBottom: '40px',
        fontStyle: 'italic',
        textDecorationThickness: '3px',
        textUnderlineOffset: '15px',
        letterSpacing: '0.02em'
      }}>
        Frequently Asked Questions
      </h1>
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
              marginBottom: '28px',
              transition: 'background 0.3s',
              overflow: 'hidden'
            }}
            onClick={() => setOpen(open === i ? null : i)}
            onMouseEnter={(e) => e.target.style.background = 'var(--peach-100)'}
            onMouseLeave={(e) => e.target.style.background = 'var(--peach-50)'}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PeachBlob style={{ width: '32px', height: '32px', marginRight: '12px' }} />
              <div style={{ fontWeight: '600', color: '#000000', fontSize: '1.125rem' }}>{f.q}</div>
            </div>
            <div style={{
              transition: 'all 0.5s ease',
              maxHeight: open === i ? '200px' : '0',
              marginTop: open === i ? '12px' : '0',
              opacity: open === i ? 1 : 0,
              overflow: 'hidden'
            }}>
              <div style={{ color: '#404040' }}>{f.a}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
