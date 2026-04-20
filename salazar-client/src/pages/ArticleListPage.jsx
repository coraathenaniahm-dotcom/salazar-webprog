import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import articles from '../assets/article-content.js';

const ArticleListPage = () => {
  return (
    <div style={{ width: '100%', background: '#ffffff' }}>

      {/* HERO SECTION */}
      <section style={{ paddingTop: '1rem', paddingBottom: '4rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <p style={{ marginBottom: '3.5rem', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ec4899' }}>
            Articles
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem', fontWeight: '800', color: '#000', lineHeight: '1.1' }}>
                Fuggler Guide in a<br />Simple Card Grid
              </h1>
              <p style={{ marginBottom: '2rem', fontSize: '1rem', color: '#6b7280', lineHeight: '1.6' }}>
                A delightful showcase of our Fuggler collection with unique profiles.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button to="/">Back Home</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div
  style={{
    width: '100vw',
    height: '2px',
    background: '#fbcfe8', // solid color
    marginLeft: 'calc(-50vw + 50%)'
  }}
/>

      {/* ARTICLES SECTION */}
      <section
        style={{
          background: '#ffffff',
          paddingTop: '3rem',
          paddingBottom: '3rem',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          border: 'none',
          boxShadow: 'none'
        }}
      >
        <div style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#ec4899' }}>
            Fuggler Articles
          </p>

          <h2 style={{ marginBottom: '3rem', fontSize: '1.5rem', fontWeight: '700', color: '#000' }}>
            Fuggler Guide
          </h2>

          <ArticleList articles={articles} />
        </div>
      </section>

    </div>
  );
};

export default ArticleListPage;