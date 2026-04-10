import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import article1 from '../assets/article1.jpeg';
import article2 from '../assets/article2.jpeg';
import article3 from '../assets/article3.jpeg';
import article4 from '../assets/article4.jpeg';
import article5 from '../assets/article5.jpeg';

const ArticlePage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', background: '#ffffff' }}>
      {/* Hero/Intro Section */}
      <section style={{ paddingTop: '2rem', paddingBottom: '2rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '0.75rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280' }}>
            Articles
          </p>
          <h1 style={{ marginBottom: '1rem', fontSize: '1.75rem', fontWeight: '700', color: '#000', lineHeight: '1.2' }}>
            Featured articles in a simple card grid
          </h1>
          <p style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.6' }}>
            A clean wireframe section for article thumbnails, titles, short descriptions, and one clear action per card.
          </p>
          <div style={{ marginBottom: '0' }}>
            <button 
              onClick={() => navigate('/')}
              style={{ 
              padding: '0.5rem 1rem', 
              border: '2px solid #6b7280', 
              background: 'transparent', 
              color: '#6b7280',
              borderRadius: '1.5rem',
              fontWeight: '600',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}>
              Back Home
            </button>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section style={{ background: '#f9fafb', paddingTop: '3rem', paddingBottom: '3rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9ca3af' }}>
            Featured Articles
          </p>
          <h2 style={{ marginBottom: '3rem', fontSize: '1.5rem', fontWeight: '700', color: '#000' }}>Article card grid</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', width: '100%' }}>
            {[
              { img: article1, num: '01', title: 'Understanding React Props and Styling', desc: 'Props allow information to flow down from parent to child components. They are read-only and essential for component reusability.' },
              { img: article2, num: '02', title: 'React Functional Components', desc: 'Functional components are simple JavaScript functions that return JSX and manage state through hooks and lifecycle operations.' },
              { img: article3, num: '03', title: 'React Component Lifecycle', desc: 'Class components have lifecycle methods for mounting, updating, and unmounting stages in the component lifecycle.' },
              { img: article4, num: '04', title: 'React Router Basics', desc: 'React Router allows navigation between pages without a page reload. Learn the fundamentals of routing in React applications.' },
              { img: article5, num: '05', title: 'Managing State in React', desc: 'State allows components to track and manage dynamic data. Use useState hooks to create interactive components.' },
            ].map((article, i) => (
              <article key={i} style={{ 
                borderRadius: '1rem',
                background: '#ffffff',
                overflow: 'hidden',
                border: '2px solid #6b7280',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <img src={article.img} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'contain', display: 'block', background: '#e5e7eb' }} />
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9ca3af', marginBottom: '0.75rem' }}>
                    Article {article.num}
                  </p>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '700', color: '#000', lineHeight: '1.3' }}>{article.title}</h3>
                  <p style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.5', flex: 1 }}>{article.desc}</p>
                  <button style={{ 
                    padding: '0.5rem 1rem', 
                    border: '2px solid #6b7280', 
                    background: 'transparent', 
                    color: '#6b7280',
                    borderRadius: '1.5rem',
                    fontWeight: '600',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#6b7280';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#6b7280';
                  }}>
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
