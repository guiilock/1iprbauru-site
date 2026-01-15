import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-block text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-accent hover:bg-accent-light text-white transform hover:scale-105',
    secondary: 'bg-secondary hover:bg-secondary-light text-white',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
