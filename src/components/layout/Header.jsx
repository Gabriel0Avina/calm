import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="/">Calm</a>
        </div>
        <nav className="main-navigation">
          <ul>
            <li><a href="/business">Para empresas</a></li>
            <li><a href="/devices">Dispositivos</a></li>
            <li><a href="/pricing">Precios</a></li>
          </ul>
        </nav>
        <div className="auth-links">
          <a href="/login" className="login-link">Iniciar sesión</a>
          <a href="/signup" className="btn btn-header-signup">Pruébalo gratis</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
