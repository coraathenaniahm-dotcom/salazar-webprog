import { useNavigate } from 'react-router-dom';

import article1 from '../assets/article1.png';
import article2 from '../assets/article2.png';
import article3 from '../assets/article3.png';
import article4 from '../assets/article4.png';
import article5 from '../assets/article5.png';

const ArticleList = ({ articles }) => {
  const images = [article1, article2, article3, article4, article5];
  const navigate = useNavigate();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', width: '100%' }}>
      {articles.map((article, index) => (
        <article
          key={article.name}
          style={{
            borderRadius: '1rem',
            background: '#fbcfe8',
            overflow: 'hidden',
            border: '2px solid #6b7280',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '320px',
          }}
        >
          <img
            src={images[index]}
            alt={article.title}
            style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block', background: '#e5e7eb' }}
          />

          <div style={{ padding: '0.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '0.6rem', fontWeight: '600', color: '#000', marginBottom: '0.3rem' }}>
              Article {String(index + 1).padStart(2, '0')}
            </p>
            <h3 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.3rem', color: '#000' }}>
              {article.title}
            </h3>
            <p style={{ fontSize: '0.75rem', color: '#374151', flex: 1 }}>
              {article.content[0].substring(0, 100)}...
            </p>
            <button
              onClick={() => navigate(`/articles/${article.name}`)}
              style={{
                marginTop: 'auto',
                width: '100%',
                padding: '0.75rem 1.75rem',
                background: 'linear-gradient(135deg, #ec4899, #f472b6)',
                color: '#fff', border: 'none', borderRadius: '9999px',
                fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(236,72,153,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(236,72,153,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(236,72,153,0.35)'; }}
            >
              Read More
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;