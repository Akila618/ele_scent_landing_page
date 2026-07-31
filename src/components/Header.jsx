import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <header className="header">
        <a href="#" className="logo" onClick={closeMobileMenu}>
          <img src="/images/logo.png" alt="ELE-SCENT Logo" className="logo-img" />
          <span className="logo-text">ELE-SCENT</span>
        </a>

        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#system-video" onClick={closeMobileMenu}>Video</a>
          <a href="#vision-mission" onClick={closeMobileMenu}>Vision &amp; Mission</a>
          <a href="#features" onClick={closeMobileMenu}>How It Works</a>
          <a href="#e-nose" onClick={closeMobileMenu}>E-nose</a>
          <a href="#results" onClick={closeMobileMenu}>Results</a>
          <a href="#project-team" onClick={closeMobileMenu}>Team</a>
          <a href="#tools-tech" onClick={closeMobileMenu}>Tools</a>
          <a href="#data" className="nav-cta" onClick={closeMobileMenu}>Data Access</a>
        </nav>
      </header>
    </div>
  )
}
