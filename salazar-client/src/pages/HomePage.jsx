import Button from '../components/Button';
import fugglerImg from '../assets/fuggler.jpg';
import aldenImg from '../assets/alden meme.jpg';
import cardoImg from '../assets/cardo_meme.jpg';
import mimiyuhImg from '../assets/mimiyuh_meme.jpg';
import sassaImg from '../assets/sassa_meme.jpg';

const HomePage = () => {
  return (
    <div style={{ width: '100%', background: '#ffffff' }}>
      {/* Hero Section - Two Column Layout */}
      <section style={{ paddingTop: '2rem', paddingBottom: '2rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899' }}>
            ✨ Meet Our Fuzzy Friend
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            {/* LEFT COLUMN - TEXT */}
            <div>
              <h1 style={{ marginBottom: '0.75rem', fontSize: '3rem', fontWeight: '800', color: '#000', lineHeight: '1.1' }}>
                Fugglers:<br/>Where Magic<br/>Comes Alive
              </h1>
              <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.5', maxWidth: '90%' }}>
                Discover the whimsical world of Fugglers - the adorable pink creatures with personality bursting at the seams. Each Fuggler is a unique, collectible plushie combining quirky charm with endless cuddle appeal. Experience the fuzzy, fun, and fantastical world of Fugglers!
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Button variant="primary">
                  Learn More
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN - IMAGE */}
            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(236, 72, 153, 0.2)', background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)' }}>
              <img src={fugglerImg} alt="Fuggler Character" style={{ width: '100%', height: '28rem', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* The Fuggler Story Section */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)', background: '#ffffff' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '3rem', fontWeight: '800', color: '#000', lineHeight: '1.2' }}>
            The Fuggler Story
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: '1.8' }}>
            Born from imagination and crafted with love, Fugglers are the ultimate fuzzy companions. Each one is handpicked for its unique personality and charm. Join millions of Fuggler fans who have discovered that the world is a happier place with a Fuggler by your side.
          </p>
        </div>
      </section>

      {/* Fuggler Stats Section */}
      <section style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)', paddingTop: '2rem', paddingBottom: '2rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '0.25rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#be185d' }}>
            🎀 Fuggler Facts
          </p>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '800', color: '#000' }}>Why Love Fugglers?</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              { value: '100%', label: 'Cuddle Approved', icon: '🤗' },
              { value: '∞', label: 'Personality Levels', icon: '😄' },
              { value: '24/7', label: 'Cuteness Factor', icon: '💕' },
              { value: '★★★★★', label: 'Collectibility Rating', icon: '⭐' },
            ].map((stat, i) => (
              <div key={i} style={{ 
                borderRadius: '0.75rem', 
                background: 'white',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.1)',
                border: '2px solid #fbcfe8',
                transition: 'all 0.3s',
              }} 
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(236, 72, 153, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(236, 72, 153, 0.1)';
              }}>
                <span style={{ fontSize: '1.75rem', marginBottom: '0.5rem', display: 'block' }}>{stat.icon}</span>
                <p style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ec4899', marginBottom: '0.25rem' }}>{stat.value}</p>
                <p style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section style={{ paddingTop: '2rem', paddingBottom: '2rem', background: '#ffffff', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899' }}>
            🌟 Our Collection
          </p>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '800', color: '#000' }}>Meet Our Fugglers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { img: aldenImg, title: 'Alden' },
              { img: cardoImg, title: 'Cardo' },
              { img: mimiyuhImg, title: 'Mimiyuh' },
              { img: sassaImg, title: 'Sassa' },
            ].map((card, i) => (
              <div key={i} style={{
                borderRadius: '0.75rem',
                border: '2px solid #e5e7eb',
                overflow: 'hidden',
                background: '#f9fafb',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <img src={card.img} alt={card.title} style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  display: 'block',
                }} />
                <div style={{ padding: '1rem', background: '#fbcfe8' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', margin: 0, textAlign: 'center' }}>{card.title}</h4>
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
