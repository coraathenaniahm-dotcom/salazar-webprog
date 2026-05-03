import { useState } from 'react';
import Button from '../components/Button';
import patrickImg from '../assets/patrick.jpg';

const Modal = ({ type, onClose }) => {
  const content = {
    collectNow: {
      label: 'Start Collecting',
      title: 'Build Your Fuggler Family! ',
      items: [
        { title: 'Shop the Collection', desc: 'Browse our full lineup of Fugglers — from classic favorites to rare limited editions. New drops happen every month!' },
        { title: 'Fast & Safe Delivery', desc: 'Every Fuggler is carefully packaged and shipped straight to your door. Orders are processed within 1-2 business days.' },
        { title: 'Exclusive Members', desc: 'Sign up as a Fuggler Collector and get early access to new releases, special discounts, and collector-only bundles.' },
        { title: 'Gift a Fuggler', desc: 'Looking for the perfect gift? Fugglers come in gift-ready packaging — ideal for birthdays, holidays, or just because!' },
      ],
      cta: 'Start Collecting Now',
      ctaColor: 'linear-gradient(135deg, #ec4899, #f472b6)',
    },
    learnMore: {
      label: 'About Fugglers',
      title: 'What Makes Fugglers Special? ',
      items: [
        { title: 'Born from Imagination', desc: 'Fugglers were created to bring a little weirdness and a lot of warmth into everyday life. Each design starts as a hand-drawn concept.' },
        { title: 'Handpicked Quality', desc: 'Only the softest materials make the cut. Every Fuggler goes through quality checks to ensure maximum cuddliness and durability.' },
        { title: 'A Global Community', desc: 'Fuggler fans span 4 countries and counting. Join a growing community of collectors who share their Fugglers online every day.' },
        { title: 'More Than a Toy', desc: 'Fugglers are companions, conversation starters, and comfort objects. They hold a special place in the hearts of kids and adults alike.' },
      ],
      cta: 'Got It, I Love Fugglers! ',
      ctaColor: 'linear-gradient(135deg, #f472b6, #fb7185)',
    },
  };

  const c = content[type];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '1.25rem',
          padding: '2.5rem',
          maxWidth: '520px',
          width: '100%',
          boxShadow: '0 25px 60px -10px rgba(236, 72, 153, 0.3)',
          border: '2px solid #fbcfe8',
          animation: 'slideUp 0.3s ease',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: '#fce7f3', border: 'none', borderRadius: '50%',
            width: '36px', height: '36px', cursor: 'pointer',
            fontSize: '1.1rem', color: '#ec4899', fontWeight: '700',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ✕
        </button>

        <p style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ec4899', marginBottom: '0.5rem' }}>
          {c.label}
        </p>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#000', marginBottom: '1.25rem', lineHeight: '1.2' }}>
          {c.title}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {c.items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '0.75rem 1rem', background: '#fdf2f8', borderRadius: '0.75rem', border: '1px solid #fbcfe8' }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.emoji}</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '0.9rem', color: '#000', margin: '0 0 0.25rem 0' }}>{item.title}</p>
                <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: '1.5rem', width: '100%', padding: '0.875rem',
            background: c.ctaColor,
            color: '#fff', border: 'none', borderRadius: '0.75rem',
            fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(236,72,153,0.4)',
          }}
        >
          {c.cta}
        </button>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
};

const AboutPage = () => {
  const [modal, setModal] = useState(null); // 'collectNow' | 'learnMore' | null

  return (
    <div style={{ width: '100%', background: '#ffffff' }}>
      {modal && <Modal type={modal} onClose={() => setModal(null)} />}

      {/* Hero Section */}
      <section style={{ paddingTop: '1rem', paddingBottom: '4rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899' }}>
            About Us
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ marginTop: '1.5rem', fontSize: '3rem', fontWeight: '800', color: '#000', lineHeight: '1.1' }}>
                The Fuggler<br/>Story
              </h1>
              <p style={{ marginBottom: '2rem', fontSize: '1rem', color: '#6b7280', lineHeight: '1.6' }}>
                Born from imagination and crafted with love, Fugglers are the ultimate fuzzy companions. Each one is handpicked for its unique personality and charm. Join millions of Fuggler fans who have discovered that the world is a happier place with a Fuggler by your side.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => setModal('collectNow')}
                  style={{
                    padding: '0.75rem 1.75rem',
                    background: 'linear-gradient(135deg, #ec4899, #f472b6)',
                    color: '#fff', border: 'none', borderRadius: '9999px',
                    fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(236,72,153,0.35)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  Collect Now
                </button>
                <button
                  onClick={() => setModal('learnMore')}
                  style={{
                    padding: '0.75rem 1.75rem',
                    background: '#fff',
                    color: '#ec4899', border: '2px solid #fbcfe8', borderRadius: '9999px',
                    fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer',
                    transition: 'transform 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = '#fdf2f8'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#fff'; }}
                >
                  Learn More
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(236, 72, 153, 0.2)' }}>
              <img src={patrickImg} alt="About Us" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section — unchanged */}
      <section style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)', paddingTop: '2rem', paddingBottom: '2rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '0.25rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899' }}>
            Fuggler Impact
          </p>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '800', color: '#000' }}>By The Numbers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              { value: '10987', label: 'Happy Collectors' },
              { value: '938', label: 'Unique Fugglers' },
              { value: '4', label: 'Countries' },
              { value: '100%', label: 'Fuzzy & Fun' },
            ].map((stat, i) => (
              <div key={i} style={{ borderRadius: '0.75rem', background: 'white', padding: '1.5rem 1rem', textAlign: 'center', boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.1)', border: '2px solid #fbcfe8' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ec4899', marginBottom: '0.25rem' }}>{stat.value}</p>
                <p style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section — unchanged */}
      <section style={{ background: 'white', paddingTop: '2rem', paddingBottom: '2rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 1rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899', textAlign: 'left' }}>
            What Makes Fugglers Special
          </p>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '800', color: '#000', textAlign: 'left' }}>Fuggler Magic</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', width: '100%' }}>
            {[
              { title: 'Uniquely Quirky', desc: 'Each Fuggler has its own personality - no two are exactly alike, making every one a special treasure. From their expressive eyes to their charming quirks, every detail tells a story.' },
              { title: 'Softly Huggable', desc: "With their fluffy pink fur and endearing expressions, Fugglers are irresistibly cute and perfect for cuddles. Designed for comfort and companionship, they're the ultimate fuzzy friend." },
              { title: 'Highly Collectible', desc: "Build your Fuggler family! With limited editions and new releases, there's always a new friend to discover. Each one brings joy and becomes a cherished part of your collection." },
            ].map((item, i) => (
              <div key={i} style={{ borderRadius: '0.75rem', background: '#fce7f3', padding: '0.5rem 1rem 1.5rem 1rem', border: '2px solid #fbcfe8', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <h3 style={{ marginTop: '0.75rem', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '700', color: '#000', lineHeight: '1.3' }}>{item.title}</h3>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.5', margin: '0' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;