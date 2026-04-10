const Footer = () => {
  return (
    <footer style={{ background: '#000000', color: '#ffffff', paddingTop: '3rem', paddingBottom: '2rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        {/* Footer Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand Section */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#ec4899' }}>
              FUGGLERS
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#d1d5db', lineHeight: '1.6' }}>
              Discover the whimsical world of adorable Fugglers - where cuddles meet personality and magic comes alive.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#" style={{ color: '#ec4899', fontSize: '1.5rem', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                f
              </a>
              <a href="#" style={{ color: '#ec4899', fontSize: '1.5rem', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                𝕏
              </a>
              <a href="#" style={{ color: '#ec4899', fontSize: '1.5rem', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1.5rem', color: '#ffffff' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="/" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                  Home
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="/about" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                  About
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="/articles" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                  Articles
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1.5rem', color: '#ffffff' }}>
              Customer Service
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                  Contact Us
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                  FAQ
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                  Shipping Info
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1.5rem', color: '#ffffff' }}>
              Newsletter
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#d1d5db', marginBottom: '1rem' }}>
              Subscribe to get special offers and updates on new Fugglers!
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  backgroundColor: '#1f2937',
                  color: '#ffffff',
                  outline: 'none',
                }}
              />
              <button
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#ec4899',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#be185d';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ec4899';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
            © 2024 Fugglers. All rights reserved. Spreading cuddles and smiles worldwide.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
              Terms & Conditions
            </a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
