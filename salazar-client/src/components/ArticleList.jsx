import { useNavigate } from 'react-router-dom';

import article1 from '../assets/article1.png';
import article2 from '../assets/article2.png';
import article3 from '../assets/article3.png';
import article4 from '../assets/article4.png';
import article5 from '../assets/article5.png';

function DeleteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-9l-1 1H5v2h14V4z"/>
    </svg>
  );
}

const ArticleList = ({ articles, onDelete }) => {
  const images = [article1, article2, article3, article4, article5];
  const navigate = useNavigate();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', width: '100%' }}>
      {articles.map((article, index) => (
        <article
          key={article._id || article.name}
          style={{
            borderRadius: '1rem',
            background: '#fbcfe8',
            overflow: 'hidden',
            border: '2px solid #6b7280',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '320px',
            position: 'relative',
          }}
        >
          <img
            src={images[index % images.length]}
            alt={article.title}
            style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block', background: '#e5e7eb' }}
          />

          {onDelete && (
            <button
              onClick={() => onDelete(article._id || article.name)}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: '#ec4899',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#db2777'; e.currentTarget.style.transform = 'scale(1.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ec4899'; e.currentTarget.style.transform = 'scale(1)'; }}
              title="Delete article"
            >
              <DeleteIcon />
            </button>
          )}

          <div style={{ padding: '0.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '0.6rem', fontWeight: '600', color: '#000', marginBottom: '0.3rem' }}>
              Article {String(index + 1).padStart(2, '0')}
            </p>
            <h3 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.3rem', color: '#000' }}>
              {article.title}
            </h3>
            <p style={{ fontSize: '0.75rem', color: '#374151', flex: 1 }}>
              {(article.content && article.content[0] ? article.content[0].substring(0, 100) : article.title.substring(0, 100))}...
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