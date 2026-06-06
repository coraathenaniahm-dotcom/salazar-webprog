import { useState } from 'react';
import Button from '../components/Button';
import fugglerImg from '../assets/fuggler.png';
import aldenImg from '../assets/alden meme.jpg';
import cardoImg from '../assets/cardo_meme.jpg';
import mimiyuhImg from '../assets/mimiyuh_meme.jpg';
import sassaImg from '../assets/sassa_meme.jpg';

const FugglerDetailModal = ({ fuggler, onClose }) => {
  if (!fuggler) return null;
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
          background: '#fff', borderRadius: '1.25rem', padding: '2rem',
          maxWidth: '460px', width: '100%',
          boxShadow: '0 25px 60px -10px rgba(236, 72, 153, 0.3)',
          border: '2px solid #fbcfe8',
          animation: 'slideUp 0.3s ease',
          position: 'relative',
          maxHeight: '90vh', overflowY: 'auto',
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
        >✕</button>

        <div style={{
          width: '100%', borderRadius: '0.75rem', overflow: 'hidden',
          background: '#fdf2f8', marginBottom: '1.25rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img
            src={fuggler.img}
            alt={fuggler.title}
            style={{ width: '100%', maxHeight: '280px', objectFit: 'contain', display: 'block' }}
          />
        </div>

        <p style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ec4899', margin: '0 0 0.25rem 0' }}>
          Fuggler Character
        </p>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#000', margin: '0 0 0.75rem 0' }}>
          {fuggler.title}
        </h2>
        <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.7', margin: 0 }}>
          {fuggler.description}
        </p>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
};

const LearnMoreModal = ({ onClose }) => {
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
          background: '#fff', borderRadius: '1.25rem', padding: '2.5rem',
          maxWidth: '520px', width: '100%',
          boxShadow: '0 25px 60px -10px rgba(236, 72, 153, 0.3)',
          border: '2px solid #fbcfe8',
          animation: 'slideUp 0.3s ease',
          position: 'relative',
          maxHeight: '90vh', overflowY: 'auto',
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
        >✕</button>

        <p style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ec4899', marginBottom: '0.5rem' }}>
          About Fugglers
        </p>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#000', marginBottom: '1.25rem', lineHeight: '1.2' }}>
          What is a Fuggler?
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { title: 'Uniquely Quirky', desc: 'Fugglers are adorably odd plushies — soft, squishy, and full of personality with their signature toothy grins.' },
            { title: 'Collectible Characters', desc: 'Each Fuggler has a unique name, look, and backstory. Collect them all — Alden, Cardo, Mimiyuh, Sassa, and more!' },
            { title: 'Made with Love', desc: 'Crafted for cuddle enthusiasts and collectors alike, every Fuggler brings warmth and whimsy into your world.' },
            { title: 'Limited Editions', desc: "Special edition Fugglers drop regularly. Once they're gone, they're gone — so grab yours before it's too late!" },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '0.75rem 1rem', background: '#fdf2f8', borderRadius: '0.75rem', border: '1px solid #fbcfe8' }}>
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
            background: 'linear-gradient(135deg, #ec4899, #f472b6)',
            color: '#fff', border: 'none', borderRadius: '0.75rem',
            fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(236,72,153,0.4)',
          }}
        >
          Got it, I love Fugglers!
        </button>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
};

const fugglers = [
  {
    img: aldenImg,
    title: 'Alden',
    description: 'A cheerful and energetic Fuggler with an infectious personality. Known for bringing joy and laughter wherever he goes, Alden is the life of every gathering. His bright smile and boundless energy make him impossible to ignore. He loves making new friends and spreading positivity to everyone around him. Alden is the perfect companion for anyone who needs a little extra sunshine in their life.',
  },
  {
    img: cardoImg,
    title: 'Cardo',
    description: 'The cool and composed Fuggler with a confident attitude that commands attention. A true friend who always has your back no matter what challenges come your way. Cardo carries himself with quiet strength and unwavering loyalty that others admire. He is the kind of Fuggler you can count on in any situation, big or small. With Cardo by your side, you always know everything is going to be just fine.',
  },
  {
    img: mimiyuhImg,
    title: 'Mimiyuh',
    description: 'A playful and adventurous Fuggler who loves exploring new things around every corner. Full of surprises and endless fun, Mimiyuh keeps everyone on their toes with her spontaneous spirit. She approaches every day as a brand new adventure waiting to be discovered. Her curiosity and enthusiasm are absolutely contagious to everyone she meets. Mimiyuh reminds us all that life is best lived with a sense of wonder and excitement.',
  },
  {
    img: sassaImg,
    title: 'Sassa',
    description: 'The sweet and caring Fuggler with a warm heart that makes everyone feel welcome and loved. Always ready to offer comfort and companionship during both the good times and the hard ones. Sassa has a gentle nature that instantly puts people at ease wherever she goes. She listens deeply, loves unconditionally, and never fails to make those around her feel seen. Having Sassa in your collection means having a loyal and tender-hearted friend for life.',
  },
];

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFuggler, setSelectedFuggler] = useState(null);

  return (
    <div style={{ width: '100%', background: '#ffffff' }}>
      {showModal && <LearnMoreModal onClose={() => setShowModal(false)} />}
      {selectedFuggler && <FugglerDetailModal fuggler={selectedFuggler} onClose={() => setSelectedFuggler(null)} />}

      {/* Hero Section */}
      <section style={{ paddingTop: '1rem', paddingBottom: '4rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '2.5rem', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899' }}>
            Meet Our Fuzzy Friend
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ marginTop: '0', marginBottom: '2rem', fontSize: '3rem', fontWeight: '800', color: '#000', lineHeight: '1.1' }}>
                Fugglers: Where Magic<br />
                Comes Alive
              </h1>
              <p style={{ marginBottom: '2rem', fontSize: '1rem', color: '#6b7280', lineHeight: '1.6' }}>
                Discover the whimsical world of Fugglers - the adorable pink creatures with personality bursting at the seams. Each Fuggler is a unique, collectible plushie combining quirky charm with endless cuddle appeal. Experience the fuzzy, fun, and fantastical world of Fugglers!
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    padding: '0.75rem 1.75rem',
                    background: 'linear-gradient(135deg, #ec4899, #f472b6)',
                    color: '#fff', border: 'none', borderRadius: '9999px',
                    fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(236,72,153,0.35)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(236,72,153,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(236,72,153,0.35)'; }}
                >
                  Learn More
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(236, 72, 153, 0.2)' }}>
              <img
                src={fugglerImg}
                alt="Fuggler Character"
                style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fuggler Stats Section */}
      <section style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)', paddingTop: '2rem', paddingBottom: '2rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '0.25rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#be185d' }}>
            Fuggler Facts
          </p>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '800', color: '#000' }}>Why Love Fugglers?</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              { value: '100%',      label: 'Cuddle Approved' },
              { value: '1000%',     label: 'Personality Levels' },
              { value: '100000%',   label: 'Cuteness Factor' },
              { value: '10000000%', label: 'Collectibility Rating' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '0.75rem', background: 'white',
                  padding: '1.5rem 1rem', textAlign: 'center',
                  boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.1)',
                  border: '2px solid #fbcfe8', transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(236, 72, 153, 0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(236, 72, 153, 0.1)'; }}
              >
                <p style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ec4899', marginBottom: '0.25rem' }}>{stat.value}</p>
                <p style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section style={{ paddingTop: '2rem', paddingBottom: '2rem', background: '#ffffff', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899' }}>
            Our Collection
          </p>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '800', color: '#000' }}>Meet Our Fugglers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {fugglers.map((card, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '0.75rem', border: '2px solid #e5e7eb',
                  overflow: 'hidden', background: '#f9fafb', cursor: 'pointer',
                  transition: 'all 0.3s', display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <img src={card.img} alt={card.title} style={{ width: '100%', height: '180px', objectFit: 'contain', display: 'block' }} />
                <div style={{ padding: '1rem', background: '#fbcfe8', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#000', margin: '0 0 0.5rem 0' }}>{card.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.4', margin: '0 0 0.75rem 0' }}>{card.description.split('.')[0]}.</p>
                  </div>
                  <button
                    onClick={() => setSelectedFuggler(card)}
                    style={{
                      width: 'fit-content', fontSize: '0.75rem',
                      padding: '0.5rem 1.25rem',
                      background: 'linear-gradient(135deg, #ec4899, #f472b6)',
                      color: '#fff', border: 'none', borderRadius: '9999px',
                      fontWeight: '700', cursor: 'pointer',
                      boxShadow: '0 4px 10px rgba(236,72,153,0.3)',
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;