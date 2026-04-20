import Button from '../components/Button';
import fugglerImg from '../assets/fuggler.png';
import aldenImg from '../assets/alden meme.jpg';
import cardoImg from '../assets/cardo_meme.jpg';
import mimiyuhImg from '../assets/mimiyuh_meme.jpg';
import sassaImg from '../assets/sassa_meme.jpg';

const HomePage = () => {
  return (
    <div style={{ width: '100%', background: '#ffffff' }}>
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
                <Button variant="primary" to="/404">
                  Learn More
                </Button>
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
              { value: '100%', label: 'Cuddle Approved'},
              { value: '1000%', label: 'Personality Levels'},
              { value: '100000%', label: 'Cuteness Factor'},
              { value: '10000000%', label: 'Collectibility Rating'},
            ].map((stat, i) => (
              <div
                key={i}
                style={{
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
                }}
              >
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
            Our Collection
          </p>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '800', color: '#000' }}>Meet Our Fugglers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { img: aldenImg, title: 'Alden', description: 'A cheerful and energetic Fuggler with an infectious personality. Known for bringing joy and laughter wherever he goes.' },
              { img: cardoImg, title: 'Cardo', description: 'The cool and composed Fuggler with a confident attitude. A true friend who always has your back.' },
              { img: mimiyuhImg, title: 'Mimiyuh', description: 'A playful and adventurous Fuggler who loves exploring new things. Full of surprises and endless fun.' },
              { img: sassaImg, title: 'Sassa', description: 'The sweet and caring Fuggler with a warm heart. Always ready to offer comfort and companionship.' },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '0.75rem',
                  border: '2px solid #e5e7eb',
                  overflow: 'hidden',
                  background: '#f9fafb',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
                <div style={{ padding: '1rem', background: '#fbcfe8', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#000', margin: '0 0 0.5rem 0' }}>{card.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.4', margin: '0 0 0.75rem 0' }}>{card.description}</p>
                  </div>
                  <Button variant="secondary" to="/404" style={{ width: 'fit-content', fontSize: '0.75rem' }}>
                    Read More
                  </Button>
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