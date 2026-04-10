import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.75rem',
    padding: '0.75rem 1.75rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)',
      ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(236, 72, 153, 0.4)',
      },
    },
    secondary: {
      background: 'white',
      color: '#ec4899',
      border: '2px solid #ec4899',
      boxShadow: 'none',
      ':hover': {
        background: '#fce7f3',
      },
    },
  };

  const styles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  if (to) {
    return (
      <Link to={to} style={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} style={styles}>
      {children}
    </button>
  );
};

export default Button;