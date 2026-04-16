import Button from '../components/Button';
import patrickImg from '../assets/patrick.jpg';

const AboutPage = () => {  
  return (
    <div style={{ width: '100%', background: '#ffffff' }}>
      {/* Hero Section */}
      <section style={{ paddingTop: '5rem', paddingBottom: '4rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
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
                <Button variant="primary">Collect Now</Button>
                <Button>Learn More</Button>
              </div>
            </div>

            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(236, 72, 153, 0.2)' }}>
              <img src={patrickImg} alt="About Us" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)', paddingTop: '2rem', paddingBottom: '2rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '0.25rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899' }}>
            Fuggler Impact
          </p>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '800', color: '#000' }}>By The Numbers</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              { value: '1000', label: 'Happy Collectors' },
              { value: '500', label: 'Unique Fugglers' },
              { value: '70', label: 'Countries' },
              { value: '100%', label: 'Fuzzy & Fun' },
            ].map((stat, i) => (
              <div key={i} style={{ 
                borderRadius: '0.75rem',
                background: 'white',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.1)',
                border: '2px solid #fbcfe8',
              }}>
                <p style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ec4899', marginBottom: '0.25rem' }}>{stat.value}</p>
                <p style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ background: 'white', paddingTop: '2rem', paddingBottom: '2rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 1rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899', textAlign: 'left' }}>
            What Makes Fugglers Special
          </p>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '800', color: '#000', textAlign: 'left' }}>Fuggler Magic</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', width: '100%' }}>
            {[
              { title: 'Uniquely Quirky', desc: 'Each Fuggler has its own personality - no two are exactly alike, making every one a special treasure. From their expressive eyes to their charming quirks, every detail tells a story.' },
              { title: 'Softly Huggable', desc: 'With their fluffy pink fur and endearing expressions, Fugglers are irresistibly cute and perfect for cuddles. Designed for comfort and companionship, they\'re the ultimate fuzzy friend.' },
              { title: 'Highly Collectible', desc: 'Build your Fuggler family! With limited editions and new releases, there\'s always a new friend to discover. Each one brings joy and becomes a cherished part of your collection.' },
            ].map((item, i) => (
              <div key={i} style={{ 
                borderRadius: '0.75rem',
                background: '#fce7f3',
                padding: '0.5rem 1rem 1.5rem 1rem',
                border: '2px solid #fbcfe8',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
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