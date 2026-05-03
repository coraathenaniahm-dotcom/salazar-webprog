import { useNavigate, useParams } from 'react-router-dom';
import articles from '../assets/article-content.js';

import article1 from '../assets/article1.png';
import article2 from '../assets/article2.png';
import article3 from '../assets/article3.png';
import article4 from '../assets/article4.png';
import article5 from '../assets/article5.png';

const images = [article1, article2, article3, article4, article5];

const ArticlePage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const article = articles.find((a) => a.name === name);
  const articleIndex = articles.findIndex((a) => a.name === name);
  const articleImg = images[articleIndex];

  if (!article) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#000' }}>Article not found.</h1>
        <button
          onClick={() => navigate('/articles')}
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem 1.75rem',
            background: 'linear-gradient(135deg, #ec4899, #f472b6)',
            color: '#fff', border: 'none', borderRadius: '9999px',
            fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(236,72,153,0.35)',
          }}
        >
          Back to Articles
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', background: '#ffffff' }}>

      {/* Hero Section */}
      <section style={{ padding: '2rem 0', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ padding: '0 2rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#ec4899' }}>
            Fuggler Collection
          </p>
          <h1 style={{ marginBottom: '0.75rem', fontSize: '3rem', fontWeight: '800', color: '#000', lineHeight: '1.1' }}>
            {article.title}
          </h1>
          <p style={{ fontSize: '1rem', color: '#6b7280' }}>
            A delightful showcase of our Fuggler collection with unique profiles.
          </p>
          <button
            onClick={() => navigate('/articles')}
            style={{
              marginTop: '1rem',
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
            Back to Articles
          </button>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ background: '#f9fafb', padding: '3rem 0', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto', padding: '0 2rem' }}>
          <img
            src={articleImg}
            alt={article.title}
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'contain',
              borderRadius: '1rem',
              background: '#fdf2f8',
              marginBottom: '2rem',
              display: 'block',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {article.content.map((paragraph, i) => (
              <p key={i} style={{ fontSize: '1rem', color: '#374151', lineHeight: '1.8', margin: 0 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ArticlePage;