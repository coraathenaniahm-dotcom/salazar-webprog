import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const links = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'ARTICLES', to: '/articles' },
];

const NavBar = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: '#ffffff',
      borderBottom: '2px solid #fce7f3',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        maxWidth: '100%'
      }}>
        <NavLink to="/" style={{ height: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src={logo} alt="Logo" style={{ height: '100%', width: 'auto' }} />
          <span style={{ color: '#000', fontWeight: '700', fontSize: '1.25rem', letterSpacing: '0.05em', textShadow: '0 4px 12px rgba(236, 72, 153, 0.3)' }}>FUGGLERS</span>
        </NavLink>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: isActive ? '700' : '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                position: 'relative',
                ...(isActive
                  ? {
                      background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                      color: 'white',
                      padding: '0.5rem 1.25rem',
                      borderRadius: '0.75rem',
                      boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)'
                    }
                  : {
                      color: '#000',
                      borderBottom: '2px solid transparent',
                    })
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;