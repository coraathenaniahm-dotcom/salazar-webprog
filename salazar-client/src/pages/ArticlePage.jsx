import { useNavigate } from 'react-router-dom';

import article1 from '../assets/article1.png';
import article2 from '../assets/article2.png';
import article3 from '../assets/article3.png';
import article4 from '../assets/article4.png';
import article5 from '../assets/article5.png';

const ArticlePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', background: '#ffffff' }}>
      
      {/* Hero Section */}
      <section style={{ padding: '1rem 0', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ padding: '0 2rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#6b7280' }}>
            Fuggler Collection
          </p>

          <h1 style={{ marginBottom: '0.75rem', fontSize: '3rem', fontWeight: '800', color: '#000', lineHeight: '1.1' }}>
            Fuggler Guide in a Simple Card Grid
          </h1>

          <p style={{ fontSize: '1rem', color: '#6b7280' }}>
            A delightful showcase of our Fuggler collection with unique profiles.
          </p>

          <button
            onClick={() => navigate('/')}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              border: '2px solid #6b7280',
              background: 'transparent',
              color: '#6b7280',
              borderRadius: '1.5rem',
              cursor: 'pointer'
            }}
          >
            Back Home
          </button>
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: '#f9fafb', padding: '3rem 0', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 1rem' }}>

          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '800' }}>
            Fuggler Profile Grid
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem'
          }}>

            {[
              { img: article1, title: 'Understanding React Props', desc: 'Props pass data between components.' },
              { img: article2, title: 'Functional Components', desc: 'Simple components using hooks.' },
              { img: article3, title: 'Component Lifecycle', desc: 'Mounting, updating, unmounting.' },
              { img: article4, title: 'React Router', desc: 'Navigation without reload.' },
              { img: article5, title: 'State Management', desc: 'Dynamic data using useState.' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '2px solid #e5e7eb',
                borderRadius: '1rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                aspectRatio: '1/1'
              }}>
                
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '120px', objectFit: 'contain', background: '#eee' }}
                />

                <div style={{ padding: '0.75rem', textAlign: 'center', flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.desc}</p>

                  <button
                    onClick={() => navigate('/404')}
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.4rem 0.7rem',
                      border: '2px solid #6b7280',
                      background: 'transparent',
                      color: '#6b7280',
                      borderRadius: '1rem',
                      cursor: 'pointer'
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

export default ArticlePage;