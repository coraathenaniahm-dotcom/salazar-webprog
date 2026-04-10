import Button from '../components/Button';
import patrickImg from '../assets/patrick.jpg';

const AboutPage = () => {  
  return (
    <div style={{ width: '100%', background: '#ffffff' }}>
      {/* Hero Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899' }}>
            📖 About Us
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem', fontWeight: '800', color: '#000', lineHeight: '1.1' }}>
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
              <img src={patrickImg} alt="About Us" style={{ width: '100%', height: '28rem', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)', paddingTop: '4rem', paddingBottom: '4rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#be185d' }}>
            🌟 Fuggler Impact
          </p>
          <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '800', color: '#000' }}>By The Numbers</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { value: '1000', label: 'Happy Collectors' },
              { value: '500', label: 'Unique Fugglers' },
              { value: '70', label: 'Countries' },
              { value: '100%', label: 'Fuzzy & Fun' },
            ].map((stat, i) => (
              <div key={i} style={{ 
                borderRadius: '1rem',
                background: 'white',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.1)',
                border: '2px solid #fbcfe8',
              }}>
                <p style={{ fontSize: '3rem', fontWeight: '900', color: '#ec4899', marginBottom: '0.5rem' }}>{stat.value}</p>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ background: 'white', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899' }}>
            💝 What Makes Fugglers Special
          </p>
          <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '800', color: '#000' }}>Fuggler Magic</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Uniquely Quirky', desc: 'Each Fuggler has its own personality - no two are exactly alike, making every one a special treasure.' },
              { title: 'Softly Huggable', desc: 'With their fluffy pink fur and endearing expressions, Fugglers are irresistibly cute and perfect for cuddles.' },
              { title: 'Highly Collectible', desc: 'Build your Fuggler family! With limited editions and new releases, there\'s always a new friend to discover.' },
            ].map((item, i) => (
              <div key={i} style={{ 
                borderRadius: '1rem',
                background: '#fce7f3',
                padding: '2rem',
                border: '2px solid #fbcfe8',
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
